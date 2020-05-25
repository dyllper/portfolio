import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageName="Home">
    <SEO title="Home" />
    {/*TODO: Add an image apove the text and a "CONTACT ME" button below it*/}
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores mollitia
      similique aliquid dignissimos architecto laborum? Non impedit possimus
      omnis magni sed tempore, voluptatibus dolorem dolor aperiam, ipsum
      doloribus ipsa laudantium.
    </p>
  </Layout>
)

export default IndexPage
