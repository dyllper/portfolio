import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
        return (
          <div key={index}>
            <div className="projectImage">Image will go here</div>
            <div className="projectInfo">
              <h2>{title}</h2>
              <p>{blurb}</p>
              <a href={url}>Check it out here!</a>
            </div>
          </div>
        )
      })}
    </>
  )
}
