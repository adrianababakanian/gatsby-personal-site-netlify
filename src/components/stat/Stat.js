import React from 'react';
import Tag from './../tag/Tag';

import './Stat.scss'

const Stat = ({ name, value, tag }) => (
  <div className='stat'>
    <span className='h2'> { name } </span>
    { tag ?
      <Tag name={ value } outline={ true }/> :
      value 
    }
  </div>
)

export default Stat
