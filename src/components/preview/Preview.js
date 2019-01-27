import React from 'react';
import Link from 'gatsby-link';
import Tag from './../tag/Tag';

import { CSSTransitionGroup } from 'react-transition-group' // ES6

import './Preview.css'

/* Hardcode preview border radius. */
const borderStyle = { borderRadius: '6px', borderBottom: '1px solid #DEDEDE' };

const Preview = ({ project, children }) => (
  <CSSTransitionGroup
    transitionName="tile"
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionEnter={false}
    transitionLeave={false}>
    <Link to={project.fields.slug} className="preview" style={ borderStyle }>

      <div className="description">

        <div className="title"> { project.frontmatter.title } </div>

        <div className="tags">
          {project.frontmatter.tags.map((tag) => (
            (tag != "design" && tag != "code") ? <Tag name={tag} key={tag} light={true} /> : null
          ))}
        </div>

        <div className="blurb">
          { project.frontmatter.blurb }
        </div>

      </div>

      <div className="image"> { children } </div>
    </Link>
  </CSSTransitionGroup>
)

export default Preview;
