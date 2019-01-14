import React from 'react';
import Link from 'gatsby-link';
import Tag from './../tag/Tag';

import './Preview.css'

const Preview = ({ project, color, children }) => (
  <Link to={project.fields.slug} className={`preview ${color}`}>
    <div className="description">
      <div className="title"> { project.frontmatter.title } </div>
      <div className="tags">
        {project.frontmatter.tags.map((tag) => (
          <Tag name={tag} />
        ))}
      </div>
      <div className="blurb">
        { project.frontmatter.blurb }
      </div>
    </div>
    <div className="image"> { children } </div>

    {/* <div className="preview-image"> { children } </div>
    <div className="preview-hover">
      { project.frontmatter.title }
    </div> */}
  </Link>
)

export default Preview;
