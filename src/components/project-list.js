import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import styles from "../styles/project-list.module.scss"

export default function ProjectList() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              path
              blurb
              url
            }
          }
        }
      }
    }
  `)
  return (
    <>
      {data.allMarkdownRemark.edges.map((edge, index) => {
        const { title, path, blurb, url } = edge.node.frontmatter
        const classList = `${styles.projectContainer} ${
          index % 2 !== 0 ? "dark reverse" : ""
        }`
        //TODO: Figure out why the dark and reverse classes are not being applied properly.
        //TODO: Get the background color to stretch across the screen and not be restricted.
        // May have to get rid of margin: 0 auto on the <main></main> element of the layout and apply
        // it to individual containers as needed.
        return (
          <div className={classList} key={index}>
            <div className={styles.projectImage}>Image will go here</div>
            <div className={styles.projectInfo}>
              <h3>{title}</h3>
              <p>{blurb}</p>
              <a href={url}>Check it out here!</a>
            </div>
          </div>
        )
      })}
    </>
  )
}
