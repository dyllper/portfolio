import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ProjectCard from "./project-card"

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
              image
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
        return <ProjectCard projectEdge={edge} key={index} />
      })}
    </section>
  )
}
