import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import styles from "../styles/project-list.module.scss"

export default function ProjectList() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              blurb
              url
            }
          }
        }
      }
    }
  `)
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.projectsHeading}>Portfolio</h2>
      {data.allMarkdownRemark.edges.map((edge, index) => {
        const { title, blurb, url } = edge.node.frontmatter
        const { slug } = edge.node.fields
        const classList = `${styles.projectContainer} ${
          index % 2 !== 0 ? `${styles.reverse}` : `${styles.dark}`
        }`
        return (
          <div className={classList} key={index}>
            <div className={styles.projectImage}>Image will go here</div>
            <div className={styles.projectInfo}>
              <Link aria-label={title} to={`/${slug}`}>
                <h3>{title}</h3>
              </Link>
              <p>{blurb}</p>
              <a href={url}>Check it out here!</a>
            </div>
          </div>
        )
      })}
    </section>
  )
}
