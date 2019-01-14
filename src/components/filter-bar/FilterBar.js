import React from 'react'
import FilterHeader from './FilterHeader/FilterHeader.js'
import FilterBody from './FilterBody/FilterBody.js'

import './FilterBar.css'

/* A dropdown menu that applies tag-based filters
 * to the displayed project previews. */
class FilterBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showBody: false,
      filters: ["UI", "Branding"]
    }

    this.toggleState = this.toggleState.bind(this);
    this.applyFilters = this.applyFilters.bind(this);
  }

  /* Display or hide FilterBody. */
  toggleState() {
    this.setState({
      showBody: !this.state.showBody,
    })
  }

  /* Update state to reflect which filters are applied
   * and/or deselected. */
  applyFilters(filterList) {
    this.setState({
      filters: filterList
    })
  }

  render() {
    return (
      <div className={`FilterBar ${this.state.showBody ? 'showBody' : null}`} onClick={this.toggleState}>

        {/* Header element displaying which filters, if any, are applied. */}
        <FilterHeader filters={this.state.filters}
                      showBody={this.state.showBody}
                      toggleState={this.toggleState}/>

        {/*Dropdown element that allows user to select and apply filters. */}
        <FilterBody filters={this.state.filters}
                      showBody={this.state.showBody}
                      applyFilters={this.applyFilters}/>

      </div>
    )
  }

}

export default FilterBar
