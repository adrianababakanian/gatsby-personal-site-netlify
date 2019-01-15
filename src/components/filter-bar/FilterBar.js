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

    this.display = this.display.bind(this);
    this.hide = this.hide.bind(this);
    this.applyFilters = this.applyFilters.bind(this);
  }

  /* Display FilterBody. */
  display() {
    this.setState({
      showBody: true,
    });
    console.log("I am also happening dummy");
  }

  /* Hide FilterBody. */
  hide() {
    this.setState({
      showBody: false,
    });
    console.log("hiding");
  }

  /* Update state to reflect which filters are applied
   * and/or deselected. */
  applyFilters(filterList) {
    this.setState({
      filters: filterList
    })
  }

  render() {

    const showBody = this.state.showBody ? 'showBody' : null;

    var body = null;
    if (this.state.showBody) {
      body = (
        /* Dropdown element that allows user to select and apply filters. */
        <FilterBody filters={this.state.filters}
                      showBody={this.state.showBody}
                      applyFilters={this.applyFilters}
                      hide={this.hide} />
      );
    }

    return (
      <div className={`FilterBar ${showBody}`}>
        {/* Header element displaying which filters, if any, are applied. */}
        <FilterHeader filters={this.state.filters}
                      showBody={this.state.showBody}
                      display={this.display} />

        {body}

      </div>
    )
  }

}

export default FilterBar
