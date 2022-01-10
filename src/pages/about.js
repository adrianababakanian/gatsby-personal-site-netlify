import React from 'react'
import me from './../assets/images/me-uji.png'
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
            <h1> Hi there! </h1>
            <CSSTransitionGroup
              transitionName="tile"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnter={false}
              transitionLeave={false}>
            <div className='wrap'>
              <div className='main'>
                <h2 className="mild">
                  I’m Adriana. I am a creative at heart, inspired by a fascination with technical logic. I'm particularly 
                  interested in the implications of mathematics in user interfaces, both visually and computationally.
                </h2>
                <div className="me-wrapper">
                  <img src={me} className="me"/>
                </div> 
              </div>
              <div className='secondary'>
                <h4>
                  I'm currently having fun during my work days building <a href="https://www.mapbox.com/mapbox-studio" target="_blank">Mapbox Studio</a>, a broswer-based design tool that
                  empowers anyone to create beautiful, radically custom maps.
                </h4>
                <h4>
                  Before that, I graduated with honors from <a href="https://www.berkeley.edu/" target="_blank">UC Berkeley</a> with a double 
                  major in <a href="https://cs.berkeley.edu/" target="_blank">Computer Science</a> and <a href="https://math.berkeley.edu/" target="_blank">Applied Mathematics</a>, and a certificate in <a>Human-Centered Design</a>. During my time at Berkeley,
                  I taught an <a href="https://www2.eecs.berkeley.edu/Courses/CS160/" target="_blank">HCI course</a> at the <a href="https://jacobsinstitute.berkeley.edu/" target="_blank">Jacobs Institute for Design Innovation</a> and designed more things that I
                  can even remember for <a href="https://calhacks.io/" target="_blank">Cal Hacks</a>.
                </h4>
                <h4>
                  Most of the time you're likely to find me riding one of my (always Reynolds steel-framed) bikes, studying Japanese,
                  sketching in a museum, shooting urban photography, or being a geek about art history (particularly anything Danish).
                  I'm also really into public transit systems & urban design!
                </h4>
                <div className="divider" />
                <div>
                  <h4>
                    <a className="social" href="https://www.linkedin.com/in/adriana-babakanian-60b597112/" target="_blank">
                      LinkedIn <span className="bold">/adriana-babakanian</span>
                    </a>
                  </h4>
                  <h4>
                    <a className="social" href="https://github.com/adrianababakanian" target="_blank">
                      GitHub <span className="bold">/adrianababakanian</span>
                    </a>
                  </h4>
                  <h4>
                    <a className="social" href="https://twitter.com/adrianabaklava" target="_blank">
                      Twitter <span className="bold">@adrianabaklava</span>
                    </a>
                  </h4>
                  <h4>
                    <a className="social" href="https://www.pinterest.com/ababakanian/" target="_blank">
                      Pinterest <span className="bold">/ababakanian</span>
                    </a>
                  </h4>
                  <h4>
                    <a className="social" href="https://dribbble.com/adrianababakanian" target="_blank">
                      Dribble <span className="bold">/adrianababakanian</span>
                    </a>
                  </h4>
                  <h4>
                    <a className="social" href="mailto:ababakanian@gmail.com" target="_blank">
                      Email <span className="bold">ababakanian@gmail.com</span>
                    </a>
                  </h4>
                </div>
              </div>
            </div>

            </CSSTransitionGroup>

            {/* <div className='wrap'>
              <div className='secondary column'>
                <h2 className='title'>Stats</h2>
                <div className='stats'>
                  <Stat name={ "age" } value={ "21" } />
                  <Stat name={ "heritage" } value={ "Croatian + Armenian" } />
                  <Stat name={ "education" } value={ "UC Berkeley, B.A. Computer Science & B.A. Applied Mathematics" } />
                  <Stat name={ "Myers-Briggs" } value={ "INTJ" } tag={ true } />
                </div>
              </div>
            </div> */}

            {/* <div className='wrap'>
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
            </div> */}

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
