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
  }

  render() {
    const label = this.props.filters.length == 0 ? "All" : "Filters:";
    const showBody = this.props.showBody;

    return (
      <div className={`FilterHeader ${showBody ? 'showBody' : ''}`}>
        <div className="label"> { label } </div>
        { this.props.filters.map((filter) => (
          <Tag name={filter} key={filter} editable={showBody} />
        ))}
        {showBody ? <input /> : null}
        {showBody ? <div className="filter-close x"> <FontAwesomeIcon icon="times" /> </div> : null}
      </div>
    )
  }
}

export default FilterHeader
