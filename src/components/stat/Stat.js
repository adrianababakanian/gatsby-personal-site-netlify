import React from 'react';
import Tag from './../tag/Tag';

import './Stat.scss'

const Stat = ({ name, value, tag }) => (
  <div className='stat'>
    <h2> { name } </h2>
    <div className='value'>
      { tag ?
        <Tag name={ value } outline={ true }/> :
        <h5> { value } </h5>
      }
    </div>
  </div>
)

export default Stat
