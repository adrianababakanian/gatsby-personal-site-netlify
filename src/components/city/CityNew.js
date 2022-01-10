import React from 'react'
import { Link } from 'gatsby'
import Tag from './../tag/Tag'

import { CSSTransitionGroup } from 'react-transition-group' // ES6

import './City.scss'

class CityNew extends React.Component {
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
    if (props.city == 'Barcelona') {
      this.images = importAll(require.context('./images/barcelona', false, /\.(png|jpe?g|svg)$/));
    } else if (props.city == 'Amsterdam') {
      this.images = importAll(require.context('./images/amsterdam', false, /\.(png|jpe?g|svg)$/));
    } else if (props.city == 'Utrecht') {
      this.images = importAll(require.context('./images/utrecht', false, /\.(png|jpe?g|svg)$/));
    } else if (props.city == 'Rotterdam') {
      this.images = importAll(require.context('./images/rotterdam', false, /\.(png|jpe?g|svg)$/));
    } else if (props.city == 'Milan') {
      this.images = importAll(require.context('./images/milan', false, /\.(png|jpe?g|svg)$/));
    } else if (props.city == 'Venice') {
      this.images = importAll(require.context('./images/venice', false, /\.(png|jpe?g|svg)$/));
    } else if (props.city == 'Dubrovnik') {
      this.images = importAll(require.context('./images/dubrovnik', false, /\.(png|jpe?g|svg)$/));
    } else if (props.city == 'London') {
      this.images = importAll(require.context('./images/london', false, /\.(png|jpe?g|svg)$/));
    } else if (props.city == 'Paris') {
      this.images = importAll(require.context('./images/paris', false, /\.(png|jpe?g|svg)$/));
    } else if (props.city == 'Bergamo') {
      this.images = importAll(require.context('./images/bergamo', false, /\.(png|jpe?g|svg)$/));
    } else if (props.city == 'Tahoe') {
      this.images = importAll(require.context('./images/tahoe', false, /\.(png|jpe?g|svg)$/));
    } else if (props.city == 'New York') {
      this.images = importAll(require.context('./images/new york', false, /\.(png|jpe?g|svg)$/));
    } else if (props.city == 'Split') {
      this.images = importAll(require.context('./images/split', false, /\.(png|jpe?g|svg)$/));
    } else if (props.city == 'Pučišća') {
      this.images = importAll(require.context('./images/pucisca', false, /\.(png|jpe?g|svg)$/));
    } else if (props.city == 'Seoul') {
      this.images = importAll(require.context('./images/seoul', false, /\.(png|jpe?g|svg)$/));
    } else if (props.city == 'Tokyo') {
      this.images = importAll(require.context('./images/tokyo', false, /\.(png|jpe?g|svg)$/));
    } else if (props.city == 'Kamikochi') {
      this.images = importAll(require.context('./images/kamikochi', false, /\.(png|jpe?g|svg)$/));
    } else if (props.city == 'Okayama') {
      this.images = importAll(require.context('./images/okayama', false, /\.(png|jpe?g|svg)$/));
    } else if (props.city == 'Himeji') {
      this.images = importAll(require.context('./images/himeji', false, /\.(png|jpe?g|svg)$/));
    } else if (props.city == 'Shirakawago') {
      this.images = importAll(require.context('./images/shirakawago', false, /\.(png|jpe?g|svg)$/));
    } else if (props.city == 'Osaka') {
      this.images = importAll(require.context('./images/osaka', false, /\.(png|jpe?g|svg)$/));
    } else if (props.city == 'Takayama') {
      this.images = importAll(require.context('./images/takayama', false, /\.(png|jpe?g|svg)$/));
    } else {
      this.image = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
    }

  }

  render() {

    const images = this.images ? Object.values(this.images).map((image) =>
      // <CSSTransitionGroup
      //   transitionName="tile"
      //   transitionAppear={true}
      //   transitionAppearTimeout={700}
      //   transitionEnter={false}
      //   transitionLeave={false}>
        <img src={image} key={image} />
      // </CSSTransitionGroup>
    ) : null


    return (
      <CSSTransitionGroup
        transitionName="tile"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>

      <div className={`city ${this.props.square ? 'square' : ''} ${this.props.vertical ? 'vertical' : ''} ${this.props.sub ? 'sub' : 'normal'}`}>

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

      </CSSTransitionGroup>


    )
  }
}

export default CityNew
