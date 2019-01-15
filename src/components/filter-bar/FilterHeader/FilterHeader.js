import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import Tag from './../../tag/Tag.js'

import './FilterHeader.css'

library.add(faTimes);

class FilterHeader extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen() {
    this.props.display();
  }

  render() {
    const label = this.props.filters.length == 0 ? "All" : "Filters:";

    return (
      <div className="FilterHeader" onClick={this.handleOpen}>

        <div className="label"> { label } </div>

        { this.props.filters.map((filter) => (
          <Tag name={filter} key={filter} editable={false} />
        ))}

      </div>
    )
  }
}

export default FilterHeader
