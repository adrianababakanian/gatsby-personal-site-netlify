import React from 'react'
import './FilterBar.css'

class FilterBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="FilterBar">
        <div className="filter-item">All</div>
      </div>
    )
  }

}

export default FilterBar
