import React from 'react';
import { Link } from 'gatsby'

import './Elsewhere.scss';

import git from './assets/github.svg'
import dribbble from './assets/dribbble.svg'
import pinterest from './assets/pinterest.svg'
import linkedin from './assets/linkedin.svg'
import email from './assets/email.svg'

const Elsewhere = ({ color }) => {
  return (
    <div className="elsewhere">
      <a target="_blank" href="https://github.com/adrianababakanian" className="else"> <img src={git}/> </a>
      <a target="_blank" href="https://dribbble.com/adrianababakanian" className="else"> <img src={dribbble}/> </a>
      <a target="_blank" href="https://www.pinterest.com/ababakanian/" className="else"> <img src={pinterest}/> </a>
      <a target="_blank" href="https://www.linkedin.com/in/adriana-babakanian-60b597112/" className="else"> <img src={linkedin}/> </a>
      <a target="_blank" href="mailto:ababakanian@berkeley.edu" className="else"> <img src={email}/> </a>
    </div>
  )
}

export default Elsewhere;
