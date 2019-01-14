import React from 'react';
import './Tag.css'

const Tag = ({ name }) => (
  <div className={`tag ${name}`}> { name } </div>
)

export default Tag;
