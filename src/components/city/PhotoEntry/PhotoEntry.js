import React from 'react'
import { Link } from 'gatsby'

import './PhotoEntry.scss'

class PhotoEntry extends React.Component {
  constructor(props) {
    super(props);
    /* Import images. */
    function importAll(r) {
      let images = {};
      r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
      return images;
    }
    const route = './../images/' + props.title;
    console.log(route);
    console.log(props.parent)
    if (props.parent == 'Kyoto') {
      this.images = importAll(require.context('./../images/kyoto', false, /\.(png|jpe?g|svg)$/));
    } else {
      this.image = importAll(require.context('./../images', false, /\.(png|jpe?g|svg)$/));
    }
  }

  render() {
    const images = this.images ? Object.values(this.images).map((image) =>
        <img src={image} key={image} />
    ) : null
    return (
      <li className='photo-entry'>
        <div className="image"> <img src='./../images/kyoto/DSCF9932.png' /> </div>
        <div className="description">
          <div className="title"> { this.props.title } </div>
          <div className="snippet"> { this.props.snippet }</div>
        </div>
      </li>
    )
  }
}

export default PhotoEntry
