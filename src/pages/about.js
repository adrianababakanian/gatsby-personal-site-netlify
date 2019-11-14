import React from 'react'
import me from './../assets/images/me-nara-2.png'
import Elsewhere from './../components/elsewhere/Elsewhere'
import Fact from './../components/fact/Fact'
import Stat from './../components/stat/Stat'
import Layout from '../layouts'

import matcha from './../assets/images/matcha.png'

import { CSSTransitionGroup } from 'react-transition-group' // ES6

const AboutPage = () => {
  return (
    <Layout>

        <div className="container">
          <div className='about'>
            <div className='wrap'>
              <div className='main column'>
                <div className='title'><h1 className='about'> Hi there, I'm Adriana! </h1></div>
                <h4>
                  I’m a whimsical creative at heart informed by a deep passion for technical logic.
                  Happiest reasoning at the intersection of engineering and design, I love working with people
                  from different backgrounds and skillsets. It always inspires me to expand my own perspectives.
                </h4>
                <h4>
                  Currently, I'm having fun tinkering with graphics libraries, mathematical projections, pixels,
                  and other geographic tid-bits at <a> Mapbox</a>!
                </h4>
              </div>
              <div className='secondary column'>
                <div className="me-wrapper">
                  <img src={me} className="me"/>
                  <div className="overlay"/>
                </div>
              </div>
            </div>

            <div className='divider' style={ { marginBottom: '40px' } }></div>

            {/* <div className='wrap'>
              <div className='main column'>
                <h4 style={ { marginTop: '-10px' } }>
                  I’m full to the brim of <a target="_blank"> book recommendations
                   </a>
                   , passion for <a>travel</a>
                   , alternative R&B, and a love for learning things by
                  meeting new people. Let’s get in touch!
                </h4>
              </div>
              <div className='secondary column'>
                <h6 className='title'>Stats</h6>
                <div className='hr'/>
                <div className='stats'>
                  <Stat name={ "age" } value={ "21" } />
                  <Stat name={ "heritage" } value={ "Croatian + Armenian" } />
                  <Stat name={ "education" } value={ "UC Berkeley, B.A. Computer Science & B.A. Applied Mathematics" } />
                  <Stat name={ "Myers-Briggs" } value={ "INTJ" } tag={ true } />
                </div>
              </div>
            </div> */}

            <div className='wrap'>
              <h2>Miscellaneous trivia</h2>
              <div className='facts-grid'>
                <Fact number="N° 1" fact={<div> <a>Cycling</a> is always my preferred method of transportation. </div>} />
                <Fact number="N° 2" fact={<div> My favorite authors are <a href='https://www.carlosruizzafon.co.uk/landing-page/carlos-ruiz-zafon/carlos-ruiz-zafon-random-things-that-cheer-me-up/' target='_blank'>Carlos Ruis Zafón</a> & <a href='https://www.nytimes.com/topic/person/jonathan-safran-foer' target='_blank'>Jonathan Safran Foer</a>. </div>} />
                <Fact number="N° 3" fact={<div> I love every <a href='http://wesanderson.tv/' target='_blank'>Wes Anderson</a> film, especially <i>The Grand Budapest Hotel</i>. </div>} />
                <Fact number="N° 4" fact={<div> I <a href='https://open.spotify.com/track/2um4ISitgBDdMSZaiPyaIb?si=Mkzzar_bS0mGtMg7oNMIFg' target='_blank'>listen</a> to Charolette Day Wilson, BadBadNotGood, & Radiohead. </div>} />
                <Fact number="N° 5" fact={<div> Amsterdam’s <a href='https://www.rijksmuseum.nl/en' target='_blank'>Rijksmuseum</a> is my favorite museum in the world. </div>} />
                <Fact number="N° 6" fact={<div> I have the entire <i>Pulp Fiction</i> <a href='https://open.spotify.com/album/2Rosrqy5gnHaKLrh2ctnVq?si=xHqsQQ6TS7OaB_NARCsBvw' target='_blank'>soundtrack</a> memorized. </div>} />
                <Fact number="N° 7" fact={<div> I'm a huge <a href='reddit.com/r/math' target='_blank'> math geek</a>. Don't get me started on <a href='http://mathfaculty.fullerton.edu/mathews/c2003/JuliaMandelbrotMod.html' target='_blank'>complex analysis</a>! </div>} />
                <Fact number="N° 8" fact={<div> The algorithmic complexity of <a href='https://observablehq.com/@mourner/martin-real-time-rtin-terrain-mesh' target='_blank'>map rendering</a> fascinates me. </div>} />
              </div>
            </div>

        </div>

      </div>

    </Layout>
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
