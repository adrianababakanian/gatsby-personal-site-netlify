import React from 'react'
import me from './../assets/images/me.png'
import Elsewhere from './../components/elsewhere/Elsewhere'
import Fact from './../components/fact/Fact'

import { CSSTransitionGroup } from 'react-transition-group' // ES6

import './../common.css';

const AboutPage = () => {
  return (
    <div className="about">
      <div className="container about">
        <CSSTransitionGroup
          transitionName="tile"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>
          <div className="about">
            <div className="me-wrapper">
              <img src={me} className="me"/>
              <div className="overlay"/>
            </div>

            <h4>
              I’m a whimsical creative at heart informed by a deep passion for technical logic.
              Happiest reasoning at the intersection of the engineering and design, I love working with people
              from different backgrounds and skillsets. It always inspires me to expand my own perspectives.
            </h4>

            <h4>
              As a believer that our idisoyncracies define us, I give you some of mine in the form of:
            </h4>
          </div>
        </CSSTransitionGroup>
      </div>
      <div className="facts-wrapper">
        <div className='container facts'>
          <h2>Eight true facts that make me, me.</h2>
          <Fact number="N° 1" fact="I'm proudly half-Croatian and half-Armenian." />
          <Fact number="N° 2" fact="My favorite authors are Carlos Ruis Zafón, Jonathan Safran Foer, and the Brontë Sisters." />
          <Fact number="N° 3" fact="I love anything Wes Anderson." />
          <Fact number="N° 4" fact="My favorite museum is Amsterdam’s Rijksmuseum." />
          <Fact number="N° 5" fact="I’m currently listening to CDW, BadBadNotGood, and Radiohead." />
          <Fact number="N° 6" fact="String lights are my spirit animal." />
          <Fact number="N° 7" fact="I *love* math." />
          <Fact number="N° 8" fact="I’m a voracious reader." />
        </div>
      </div>
    </div>
  )
}

export default AboutPage

{/* <h4> Hi, I'm Adriana. </h4>

<p> I'm a designer driven by my recognition of aesthetic
implications in even the most conceptual of things, informed by a deep passion for technical logic.
I currently study at UC Berkeley,
pursuing a double major in Computer Science &
Applied Mathematics. </p>

<h1>
  Hi! ✨ I'm Adriana Babakanian.
</h1>
<h3>
  I'm a fourth-year Regents' Scholar at UC Berkeley
  pursuing a double major in Computer Science 🌈‍ &
  Applied Mathematics 🦄.
</h3>
<h3>
  I'm a designer driven by my recognition of aesthetic
  implications in even the most conceptual of things
  💭, informed by a deep passion for technical logic 💡.
</h3>

<h3> Here's <a href='https://www.dropbox.com/s/t1q0d1iphlb6jba/Adriana%20Babakanian%20Technical%20Resume.pdf?dl=0' target='_blank' className="sakura">
my resume</a> if you'd like to take a look. </h3>

<h3>
  Some things that make me, me &mdash; I'm proudly half-Croatian 🇭🇷 &
  half-Armenian 🇦🇲 , currently am obsessed with
  20th century <a href="https://archive.nytimes.com/www.nytimes.com/books/97/06/15/reviews/marque-solitude.html?mcubz=0" target="_blank" className="sakura">magical realist literature</a>,
  listen to <a href="https://ohwondermusic.com/" target="_blank" className="sakura">Oh Wonder</a> wholeheartedly, and am
  constantly augmenting my <a href="https://www.pinterest.com/ababakanian/" target="_blank" className="sakura">Pinterest.</a>
</h3>
<h3>
  I'm also super into <a href="http://www.math.uni-duesseldorf.de/~wisbauer/book.pdf" target="_blank" className="sakura">ring theory</a> and the inherently layered
  nature of <a href="https://medium.com/@Mapbox" target="_blank" className="sakura">mapping interfaces</a> &mdash; juxtaposing user-relevant data,
  whatever it may be, onto renderings representing the
  tangible geospatial world fascinates me.
</h3>
<Elsewhere/> */}
