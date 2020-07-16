import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/index.module.scss"

import ProjectList from "../components/project-list"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "ProfileImage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 256, maxHeight: 256) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout pageName="Home">
      <SEO title="Home" />
      <section aria-label="About Section">
        <Img
          className={styles.imageContainer}
          fluid={data.file.childImageSharp.fluid}
          alt="Image of Dylan Perkins smiling with a guitar."
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
          mollitia similique aliquid dignissimos architecto laborum? Non impedit
          possimus omnis magni sed tempore, voluptatibus dolorem dolor aperiam,
          ipsum doloribus ipsa laudantium.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
          mollitia similique aliquid dignissimos architecto laborum? Non impedit
          possimus omnis magni sed tempore, voluptatibus dolorem dolor aperiam,
          ipsum doloribus ipsa laudantium.
        </p>
      </section>
      <ProjectList />
    </Layout>
  )
}

export default IndexPage
