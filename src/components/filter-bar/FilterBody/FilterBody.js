import React from 'react'
import Tag from './../../tag/Tag.js'
import TagRow from './../../tag/TagRow/TagRow.js'

import './FilterBody.scss'

/* FontAwesome React Icon imports. */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

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

    var activeTags;

    if (this.props.filters.length != 5) {
      activeTags = (
        this.props.filters.map((filter) => (
          <Tag name={ filter }
               key={ filter }
               editable={ true }
               handleFilterRemove={ this.props.handleFilterRemove }
                light={ this.props.light } />
        ))
      )
    }

    return (
      <div className="FilterBody">

        <div className="active-tags">

          { activeTags }

          <div className={`filter-close x ${this.props.light ? 'light' : ''}`} onClick={ this.handleClose }>
            <FontAwesomeIcon icon="times" />
          </div>

        </div>

        <div className="all-tags">
          {this.props.tags.map((tag) => (
            <TagRow tag={ tag }
                    key={ `tag-row-${tag}` }
                    applyFilter={ this.props.handleFilterAdd }
                    light={ this.props.light } />
          ))}
        </div>

      </div>
    )
  }
}

export default FilterBody