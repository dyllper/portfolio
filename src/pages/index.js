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
          alt="Dylan Perkins smiling with a guitar."
        />
        <p>
          Hello there! My name is Dylan Perkins, and I am a Full-Stack web
          developer with 7.5 years of experience. Though I've worked primarily
          as a full-stack developer and know my way around an API, I find that
          my real passion is frontend development. I love getting to visually
          see the results of my work appear on the screen, and to be able to
          craft wonderful experiences for users.
        </p>
        <p>
          I've spent the better part of the past year as the lead frontend
          developer on multiple new customer funded initiatives, and have plenty
          of experience working with UI/UX design teams as well as interacting
          with customers to craft the best experience possible. I work primarily
          with the React JS framework, and have used the NextJS framework on
          several personal projects. (Two of which you can check out below!) I
          also have 6 years experience working remotely, which has definitely
          proven to be an unexpected boon in our current world of social
          distancing.
        </p>
      </section>
      <ProjectList />
    </Layout>
  )
}

export default IndexPage
