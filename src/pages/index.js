import React from 'react'
import Link from 'gatsby-link'

//import Emphasis from './../components/emphasis/Emphasis'

import './../common.css';

const IndexPage = () => (
  <div className='intro'>
    <h1>Hi, I'm Adriana.</h1>
    <h3>
      I'm a
      {/* {<Emphasis content="software engineer" color={"cycle"}></Emphasis>},
      {<Emphasis content="product designer" color={"atomic"}></Emphasis>}, &
      {<Emphasis content="web developer" color={"matcha"}></Emphasis>}&nbsp; */}
      studying Computer Science & Math at the University of California, Berkeley.
    </h3>

    <h3>
      I believe in the power of visually informed interaction-driven
      engineering & a good cup of Uji matcha. 🍵
    </h3>
  </div>
)

export default IndexPage
