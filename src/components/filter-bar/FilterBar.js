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
      filters: []
    }

    this.display = this.display.bind(this);
    this.hide = this.hide.bind(this);
    this.handleFilterAdd = this.handleFilterAdd.bind(this);
    this.handleFilterRemove = this.handleFilterRemove.bind(this);
  }

  /* Display FilterBody. */
  display() {
    this.setState({
      showBody: true,
    })
  }

  /* Hide FilterBody. */
  hide() {
    this.setState({
      showBody: false,
    })
  }

  handleFilterAdd(filter) {
    this.setState({
      filters: this.state.filters.concat(filter)
    })
  }

  handleFilterRemove(filter) {
    var filtered = this.state.filters.filter(function(value, index, arr){
        return value != filter;
    });

    this.setState({
      filters: filtered
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
                      handleFilterAdd={this.handleFilterAdd}
                      handleFilterRemove={this.handleFilterRemove}
                      hide={this.hide} />
      );
    }

    return (
      <div className={`FilterBar ${showBody}`}>

        {/* Header element displaying which filters, if any, are applied. */}
        <FilterHeader filters={this.state.filters}
                      display={this.display} />

        {body}

      </div>
    )
  }

}

export default FilterBar
