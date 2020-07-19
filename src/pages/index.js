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
          Hello there! I'm Dylan, and I have been a Full Stack Software
          Developer for 7 years. Though in more recent times I am finding myself
          learning more towards enjoying working with Front End applications and
          projects and that is what a majority of my personal projects are made
          up of.
        </p>
      </section>
      <ProjectList />
    </Layout>
  )
}

export default IndexPage
