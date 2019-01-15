import React from 'react'
import Tag from './../Tag.js'
import './TagRow.css'

class TagRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(filter) {
    this.props.applyFilter(filter);
  }

  render() {

    const tag = this.props.tag;

    return (
      <div className="tag-row" key={`tag-row-${tag}`} onClick={() => this.handleClick(tag)}>
        <Tag name={tag} key={tag} />
      </div>
    )

  }
}

export default TagRow
