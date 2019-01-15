import React from 'react'
import Tag from './../../tag/Tag.js'

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
  }

  handleClose() {
    this.props.hide();
  }

  render() {

    const showBody = this.props.showBody;

    return (
      <div className="FilterBody">

        <div className="active-tags">
          { this.props.filters.map((filter) => (
            <Tag name={filter} key={filter} editable={showBody} />
          ))}

          {showBody ? <div className="filter-close x" onClick={this.handleClose}> <FontAwesomeIcon icon="times" /> </div> : null}
        </div>


        <div className="all-tags">
          {tags.map((tag) => (
            <div className="tag-row" key={`tag-row-${tag}`}>
              <Tag name={tag} key={tag} />
            </div>
          ))}
        </div>

      </div>
    )
  }
}

export default FilterBody
