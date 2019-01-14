import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './Tag.css'

library.add(faTimes);

const Tag = ({ name, editable }) => (
  <div className={`tag ${name}`}>
    { name }
    {editable ? <div className="x"> <FontAwesomeIcon icon="times" /> </div> : null}
  </div>
)

export default Tag;
