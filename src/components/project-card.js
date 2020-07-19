import React from "react"

import styles from "../styles/project-card.module.scss"

export default function ProjectCard({ projectEdge }) {
  const {
    title,
    url,
    githubClient,
    githubServer,
    image,
  } = projectEdge.node.frontmatter
  const { content } = projectEdge.node.internal

  // const classList = `${styles.projectContainer} ${
  //   index % 2 !== 0 ? `${styles.reverse}` : `${styles.dark}`
  // }`
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImage}>
        <img src={`/${image}`} alt="Screenshot of the application" />
      </div>
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
}
