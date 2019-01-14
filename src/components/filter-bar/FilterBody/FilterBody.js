import React from 'react'
import Tag from './../../tag/Tag.js'

import './FilterBody.css'

class FilterBody extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tags = ["Visual", "UI", "Branding", "Web", "Mobile"];

    return (
      <div className="FilterBody">
        {tags.map((tag) => (
          <div className="tag-row"> <Tag name={tag} key="tag" /> </div>
        ))}
      </div>
    )
  }
}

export default FilterBody
