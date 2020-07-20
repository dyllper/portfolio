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
          Hello! My name is Dylan Perkins, and I am a Full Stack web developer!
          I have 7 years of experience working in the enterprise space across
          various tech stacks and have 5 years experience working remotely. I
          love the intersection of logical and creative thinking that is
          involved in software development, as well as having the opportunity to
          create things that can help make people's lives easier or better in
          some way.
        </p>
      </section>
      <ProjectList />
    </Layout>
  )
}

export default IndexPage
