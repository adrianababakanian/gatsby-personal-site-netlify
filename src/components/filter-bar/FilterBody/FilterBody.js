import React from 'react'
import Tag from './../../tag/Tag.js'
import TagRow from './../../tag/TagRow/TagRow.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './FilterBody.css'

const tags = ["Visual", "UI", "Branding", "Web", "Mobile"];

library.add(faTimes);

class FilterBody extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
  }

  handleClose() {
    this.props.hide();
  }

  applyFilter(tag) {
    // this.props.handleFilterAdd(tag);
    console.log(tag);
  }

  render() {

    return (
      <div className="FilterBody">

        <div className="active-tags">
          { this.props.filters.map((filter) => (
            <Tag name={filter} key={filter} editable={true} />
          ))}
          <div className="filter-close x" onClick={this.handleClose}> <FontAwesomeIcon icon="times" /> </div>
        </div>


        <div className="all-tags">
          {tags.map((tag) => (
            <TagRow tag={tag} applyFilter={this.props.handleFilterAdd} />
          ))}
        </div>

      </div>
    )
  }
}

export default FilterBody
