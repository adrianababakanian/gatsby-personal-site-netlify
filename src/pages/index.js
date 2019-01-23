import React from 'react'
import Link from 'gatsby-link'

import Emphasis from './../components/emphasis/Emphasis'

import './../common.css';
import './../style.css';

const IndexPage = () => {

  return (
    <div className='intro-wrapper'>
      <div className='intro'>
        <h1>Hi, I'm Adriana.</h1>
        <h4>I’m a designer and software engineer currently based in Berkeley, California.
            My approach to life and work is inspired by the power of cross-disciplinary knowledge.
            I’m a fan of visually-informed engineering, <a>art history</a>, Gothic literature, real analysis, Barcelona, and Uji matcha.
        </h4>
        <h4>
          I currently study at <a>UC Berkeley</a>, where I’m finishing up my double major in Computer Science & Applied Mathematics
          with a certificate in <a>Human-Centered Design</a>. I also <a>teach</a> a UI course.
        </h4>
        <h4>
          I’m full to the brim of <a target="_blank"> book recommendations
           </a>
           , passion for <a>travel</a>
           , alternative R&B, and a love for learning things by
          meeting new people. Let’s get in touch!
        </h4>
      </div>
      <div className="bottom"></div>
    </div>
  )
}

export default IndexPage

{/* <h3>
  I'm a
  {<Emphasis content="software engineer" color={"blue"}></Emphasis>},
  {<Emphasis content="product designer" color={"orange"}></Emphasis>}, &
  {<Emphasis content="web developer" color={"green"}></Emphasis>}&nbsp;
  studying Computer Science & Math at the University of California, Berkeley.
</h3>
<h3>
  I believe in the power of visually informed interaction-driven
  engineering & a good cup of Uji matcha. 🍵
</h3> */}
