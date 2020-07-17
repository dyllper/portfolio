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
              url
              githubClient
              githubServer
            }
            internal {
              content
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
        const { title, url, githubClient, githubServer } = edge.node.frontmatter
        const { content } = edge.node.internal
        const classList = `${styles.projectContainer} ${
          index % 2 !== 0 ? `${styles.reverse}` : `${styles.dark}`
        }`
        return (
          <div className={classList} key={index}>
            <div className={styles.projectImage}>Image will go here</div>
            <div className={styles.projectInfo}>
              <a href={url}>
                <h2>{title}</h2>
              </a>
              <p>{content}</p>
              <div className={styles.githubLinks}>
                {githubClient ? <a href={githubClient}>Client Code</a> : null}
                {githubServer ? <a href={githubServer}>Server Code</a> : null}
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
