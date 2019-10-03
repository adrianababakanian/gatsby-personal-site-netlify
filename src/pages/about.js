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
                <div className='title'><h1 className='about'> Hi there, I'm Adriana! </h1> <img style={ { width: '38px' } } src={ matcha } /></div>
                <h4>
                  I’m a whimsical creative at heart informed by a deep passion for technical logic.
                  Happiest reasoning at the intersection of engineering and design, I love working with people
                  from different backgrounds and skillsets. It always inspires me to expand my own perspectives.
                </h4>
                <h4>
                  I recently graduated from <a>UC Berkeley</a> with a double major in Computer Science & Applied Mathematics,
                  and a certificate in <a>Human-Centered Design</a>. I also <a>taught</a> an HCI course.
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

            <div className='wrap'>
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
                <h2 className='title'>Stats</h2>
                <div className='hr'/>
                <div className='stats'>
                  <Stat name={ "age" } value={ "21" } />
                  <Stat name={ "heritage" } value={ "Croatian + Armenian" } />
                  <Stat name={ "education" } value={ "UC Berkeley, B.A. Computer Science & B.A. Applied Mathematics" } />
                  <Stat name={ "Myers-Briggs" } value={ "INTJ" } tag={ true } />
                </div>
              </div>
            </div>

            <div className='wrap'>
              <h2 className='about'>Miscellaneous trivia</h2>
              <div className='facts-grid'>
                <Fact number="N° 1" fact="Cycling is always my preferred method of transportation." />
                <Fact number="N° 2" fact="My favorite authors are Carlos Ruis Zafón & Jonathan Safran Foer." />
                <Fact number="N° 3" fact="I love every Wes Anderson film, especially The Grand Budapest Hotel." />
                <Fact number="N° 4" fact="I listen to Charolette Day Wilson, BadBadNotGood, & Radiohead." />
                <Fact number="N° 5" fact="Amsterdam’s Rijksmuseum is my favorite museum in the world." />
                <Fact number="N° 6" fact="I have the entire Pulp Fiction soundtrack memorized." />
                <Fact number="N° 7" fact="I'm a huge math geek. Don't get me started on complex analysis!" />
                <Fact number="N° 8" fact="The layered complexity of mapping interfaces fascinates me." />
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
