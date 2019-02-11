import React from 'react';
import Link from 'gatsby-link';
import Tag from './../tag/Tag';

import './Fact.css'
import zafon from './zafon.png'

const Fact = ({ number, fact, reverse }) => (
  <div className={`fact ${ reverse ? 'reverse' : '' }`}>
    <Tag name={ number } />
    <h5> { fact } </h5>
    {/* <div className='fact-image'>
      <img src={zafon} />
    </div> */}
  </div>
)

export default Fact
