import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function ProjectDetail({ data }) {
  const project = data.markdownRemark
  return (
    <Layout>
      <h2>{project.frontmatter.title}</h2>
      <p>Technologies used: {project.frontmatter.technologies}</p>
      {project.frontmatter.githubClient && (
        <p>
          <a href={project.frontmatter.githubClient}>Client Code</a>
        </p>
      )}
      {project.frontmatter.githubServer && (
        <p>
          <a href={project.frontmatter.githubServer}>Server Code</a>
        </p>
      )}
      <p>
        Check it out in action <a href={project.frontmatter.url}>here</a>
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
