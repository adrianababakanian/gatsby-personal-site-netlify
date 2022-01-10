import React from 'react';
import { Link } from 'gatsby'
import Tag from './../tag/Tag';

import './Fact.scss'

const Fact = ({ number, fact, reverse }) => (
  <div className={`fact ${ reverse ? 'reverse' : '' }`}>
    <Tag name={ number } outline={ true } />
    <h5> { fact } </h5>
  </div>
)

export default Fact
