import React from 'react';
import Link from 'gatsby-link';
import Tag from './../tag/Tag';

import './Fact.css'

const Fact = ({ number, fact, reverse }) => (
  <div className={`fact ${ reverse ? 'reverse' : '' }`}>
    <Tag name={ number } />
    <h5> { fact } </h5>
  </div>
)

export default Fact
