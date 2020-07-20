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
          I have 7 years experiece as a software developer, working primarily in
          the enterprise space. I also have 5 years experience working remotely
          with distributed teams. While I am a proficient full-stack developer,
          I find that I am leaning more towards front end web development as
          that is where I most enjoy working and dedicate the majority of my
          time to learning more about.
        </p>
        <p>
          I love the intersection of logical and creative thinking that is
          involved in software development. I'm most interested in creating
          applications and services that can bring real value to the lives of
          customers. I am currently looking for a remote individual contributor
          role that is more focused on front end development in a collaborative
          team environment.
        </p>
      </section>
      <ProjectList />
    </Layout>
  )
}

export default IndexPage
