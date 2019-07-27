import React from 'react'
import { Link } from 'gatsby'
import Tag from './../tag/Tag'

import { CSSTransitionGroup } from 'react-transition-group' // ES6

import './PhotoSet.scss'

class PhotoSet extends React.Component {
  constructor(props) {
    super(props);
    /* Import images. */
    function importAll(r) {
      let images = {};
      r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
      return images;
    }
    const route = './images/' + props.city;
    console.log(route);
    if (props.city == 'Tokyo') {
      this.images = importAll(require.context('./images/tokyo', false, /\.(png|jpe?g|svg)$/));
    } else {
      this.image = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
    }

  }

  render() {

    const images = this.images ? Object.values(this.images).map((image) =>
        <img src={image} key={image} />
    ) : null


    return (
      <CSSTransitionGroup
        transitionName="tile"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>

      <div className='photo-set'>

        <div className={`city square`}>

          {/* Display all the images in /images/{ this.props.city }. */}
          {images}

          <div className='details-wrap'>
            <h1 className='city-name'> { this.props.city } </h1>
            <div className='city-details'>
              <Tag name={ this.props.country }
                   key={ this.props.country }
                   light={ true }
                   photo={ true }/>
              <div className='date'> &middot; { this.props.date } </div>
            </div>
            <div className='description'> { this.props.description } </div>
          </div>
        </div>

        <ul className='photo-entry-list'>
          <li className='photo-entry'></li>
        </ul>

      </div>


      </CSSTransitionGroup>


    )
  }
}

export default PhotoSet
