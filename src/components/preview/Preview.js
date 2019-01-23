import React from 'react';
import Link from 'gatsby-link';
import Tag from './../tag/Tag';

import './Preview.css'

/* Hardcode preview border radius. */
const borderStyle = { borderRadius: '6px' };

const Preview = ({ project, children }) => (
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
)

export default Preview;
