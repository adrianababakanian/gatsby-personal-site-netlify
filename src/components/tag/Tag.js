import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './Tag.css'

library.add(faTimes);

class Tag extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(filter) {
    this.props.handleFilterRemove(filter);
  }

  render() {

    const name = this.props.name,
          light = this.props.light;

    return (
      <div className={`tag ${name} ${light ? 'light' : ''}`}>
        { name }
        { this.props.editable ?
          <div className="x" onClick={ () => this.handleClick(name) }>
            <FontAwesomeIcon icon="times" />
          </div>
          : null
        }
      </div>
    )
  }

}

// const Tag = ({ name, editable }) => (
//   <div className={`tag ${name}`}>
//     { name }
//     {editable ?
//       <div className="x">
//         <FontAwesomeIcon icon="times" />
//       </div>
//       : null
//     }
//   </div>
// )

export default Tag;
