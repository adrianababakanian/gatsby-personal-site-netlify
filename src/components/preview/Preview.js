import React from 'react';
import { Link } from 'gatsby'
import Tag from './../tag/Tag';

import { CSSTransitionGroup } from 'react-transition-group' // ES6

import './Preview.scss'

/* Hardcode preview border radius. */
const borderStyle = { borderRadius: '6px', borderBottom: '1.5px solid #D4D2D0' };

const Preview = ({ project, children }) => {

const blurbs = project.frontmatter.blurb ? project.frontmatter.blurb.split('\n') : ['']

return (

  <Link to={project.fields.slug} className="preview" style={ borderStyle }>

    <div className="description">

      <div className="title"> { project.frontmatter.title } </div>

      <div className="tags">
        {project.frontmatter.tags.map((tag) => (
          (tag != "design" && tag != "code") ? <Tag name={tag} key={tag} light={true} /> : null
        ))}
      </div>

      <div className="blurb">
        {blurbs.map((blurb, i) => (
          <p key={i}>{blurb}</p>
        ))}
      </div>

    </div>

    <div className="image"> { children } </div>
  </Link>

)
}

export default Preview;
