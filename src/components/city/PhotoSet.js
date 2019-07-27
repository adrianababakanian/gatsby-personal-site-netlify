import React from 'react'
import { Link } from 'gatsby'
import Tag from './../tag/Tag'
import PhotoEntry from './PhotoEntry/PhotoEntry.js'

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
    if (props.city == 'Kyoto') {
      this.images = importAll(require.context('./images/kyoto', false, /\.(png|jpe?g|svg)$/));
    } else if (props.city == 'Tokyo') {
      this.images = importAll(require.context('./images/tokyo', false, /\.(png|jpe?g|svg)$/));
    } else if (props.city == 'Croatia') {
      this.images = importAll(require.context('./images/croatia', false, /\.(png|jpe?g|svg)$/));
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

        <div className={`city square set`}>

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
          {this.props.entries.map(entry => (
              <PhotoEntry parent={ this.props.city }
                          title={ entry.name }
                          snippet={ entry.snippet }/>
          ))}
        </ul>

      </div>


      </CSSTransitionGroup>


    )
  }
}

export default PhotoSet
