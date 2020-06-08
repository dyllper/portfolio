import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function ProjectDetail({ data }) {
  const project = data.markdownRemark
  const {
    title,
    technologies,
    githubClient,
    githubServer,
    url,
  } = project.frontmatter
  return (
    <Layout pageName={title}>
      <h2>{title}</h2>
      <p>Technologies used: {technologies}</p>
      {githubClient && (
        <p>
          <a href={githubClient}>Client Code</a>
        </p>
      )}
      {githubServer && (
        <p>
          <a href={githubServer}>Server Code</a>
        </p>
      )}
      <p>
        Check it out in action <a href={url}>here</a>
      </p>
      <div dangerouslySetInnerHTML={{ __html: project.html }}></div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        url
        technologies
        githubClient
        githubServer
      }
    }
  }
`
