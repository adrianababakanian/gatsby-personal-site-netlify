import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazy-load'
import Layout from '../layouts'

import City from './../components/city/City'
import CityNew from './../components/city/CityNew'
import PhotoSet from './../components/city/PhotoSet'

class TravelIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');

    return (
      <Layout>
        <div className='container'>
            <Helmet title={`Travel | ${siteTitle}`} />

            <div className='left-column'>
              <CityNew city='Seoul' country='South Korea' date='July 2019'/>
              <CityNew city='Okayama' description='Exploring Korakuen Garden.' sub={ true } />
              <CityNew city='Kamikochi' country='Japan' date='July 2019' vertical={ true } />
              <CityNew city='Osaka' country='Japan' date='July 2019'/>
              <CityNew city='Himeji' description='An original feudal castle.' sub={ true } />
              <CityNew city='Takayama' country='Japan' date='July 2019' vertical={ true } />
              <CityNew city='Bergamo' description='Funiculars, frescos, & more.' sub={ true } />
              <CityNew city='Amsterdam' country='The Netherlands' date='December 2018 - January 2019' />
              <CityNew city='Paris' description='Wandering through Parisian wintertime.' sub={ true } />
              <CityNew city='London' country='United Kingdom' date='December 2018'/>
              <CityNew city='Tahoe' country='California' date='December 2018' />
              <CityNew city='Venice' description='An original feudal castle.' sub={ true } />
              <CityNew city='New York' country='New York' date='July 2018' />
            </div>

            <div className='right-column'>
              <PhotoSet city='Kyoto'
                        country='Japan'
                        date='June 2019'
                        square={ true }
                        entries={ [{ name: 'Nara', snippet: 'Meeting free-roaming deer.' },
                                   { name: 'Wazuka', snippet: 'A day on a tea plantation!' },
                                   { name: 'Uji', snippet: 'Enjoying everything matcha.' },
                                   { name: 'Arashiyama', snippet: 'Bamboo-filled temple trek.'}] } />
              <CityNew city='Shirakawago' country='Japan' date='July 2019' square={ true } />
              <PhotoSet city='Tokyo'
                        country='Japan'
                        date='June 2019'
                        square={ true }
                        entries={ [{ name: 'Asakusa', snippet: 'A taste of traditional Tokyo.' },
                                   { name: 'Kappabashi-dori', snippet: 'Playing restaurant for the day.' },
                                   { name: 'Mito', snippet: 'Exploring Kairakuen Garden.' }] } />
              <CityNew city='Milan' country='Italy' date='January 2019' square={ true } />
              <CityNew city='Rotterdam' country='The Netherlands' date='January 2019' />
              <CityNew city='Utrecht' country='The Netherlands' date='January 2019' square={ true } />
              <CityNew city='Barcelona' country='Spain' date='December 2018' />
              <PhotoSet city='Croatia'
                        country='Croatia'
                        date='August 2018'
                        square={ true }
                        entries={ [{ name: 'Split', snippet: 'Getting to know the motherland.' },
                                   { name: 'Dubrovnik', snippet: 'Wandering the walls.' },
                                   { name: 'Pučišća', snippet: 'Visiting family.' }] } />
            </div>

            {/* Asia Summer 2019. */}

            {/* <City city='Takayama' country='Japan' date='July 2019' />
            <City city='Kamikochi' country='Japan' date='July 2019' />
            <City city='Kanazawa' country='Japan' date='July 2019' />
            <City city='Himeji' country='Japan' date='July 2019' />
            <City city='Okayama' country='Japan' date='July 2019' />
            <City city='Osaka' country='Japan' date='July 2019' />
            <City city='Uji' country='Japan' date='June 2019' />
            <City city='Kyoto' country='Japan' date='June 2019' />
            <City city='Nara' country='Japan' date='June 2019' /> */}

            {/* Europe Winter 2018. */}
            {/* <City city='Milan' country='Italy' date='January 2019' />
            <City city='Bergamo' country='Italy' date='January 2019' />
            <City city='Rotterdam' country='The Netherlands' date='January 2019' />
            <City city='Utrecht' country='The Netherlands' date='December 2018 - January 2019' />
            <City city='Amsterdam' country='The Netherlands' date='December 2018 - January 2019' />
            <City city='Paris' country='France' date='December 2018' />
            <City city='Barcelona' country='Spain' date='December 2018' />
            <City city='London' country='United Kingdom' date='December 2018' /> */}

            {/* Tahoe Winter 2018. */}
            {/* <City city='Tahoe' country='California' date='December 2018' /> */}

            {/* Eastern Europe Summer 2018. */}
            {/* <City city='Venice' country='Italy' date='August 2018' />
            <City city='Dubrovnik' country='Croatia' date='August 2018' />
            <City city='Pučišća' country='Croatia' date='August 2018' />
            <City city='Split' country='Croatia' date='August 2018' /> */}


            {/* Pre-International. */}
            {/* <City city='New York' country='New York' date='July 2018' /> */}
            {/* <City city='Big Sur' country='California' date='May 2018' />
            <City city='Gualala' country='California' date='April 2018' />
            <City city='Los Angeles' country='California' date='January 2018' /> */}
        </div>
      </Layout>
    )
  }
}

export default TravelIndex
