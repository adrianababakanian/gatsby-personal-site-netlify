import React from 'react'
import { Link } from 'gatsby'

import { CSSTransitionGroup } from 'react-transition-group' // ES6

import Emphasis from './../components/emphasis/Emphasis'
import Layout from '../layouts'

import './../style.scss';

const IndexPage = () => {

  return (
    <Layout>
      <div className='intro-wrapper'>

            <div className='intro'>
              <h1>Hi, I'm Adriana.</h1>
              <CSSTransitionGroup
                transitionName="example"
                transitionEnter={false}
                transitionLeave={false}
                transitionAppear={true}
                transitionAppearTimeout={400}>
              <h4>I’m a designer and software engineer currently based in San Francisco, California.
                  My approach to life and work is inspired by the power of cross-disciplinary knowledge.
                  I’m a fan of visually-informed engineering, <a>art history</a>, Gothic literature, real analysis, Barcelona, and Uji matcha.
              </h4>
              <h4>
                I recently graduated from <a>UC Berkeley</a> with a double major in Computer Science & Applied Mathematics,
                and a certificate in <a>Human-Centered Design</a>. I also <a>taught</a> an HCI course.
              </h4>
              <h4>
                I’m full to the brim of <a target="_blank"> book recommendations
                 </a>
                 , passion for <a>travel</a>
                 , alternative R&B, and a love for learning things by
                meeting new people. Let’s get in touch!
              </h4>
              </CSSTransitionGroup>
            </div>


          {/* <div className="bottom"></div> */}

      </div>
    </Layout>
  )
}

export default IndexPage
