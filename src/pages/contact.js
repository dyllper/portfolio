import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../styles/contact.module.scss"

const LongPageNamePage = () => (
  <Layout pageName="Contact Me">
    <SEO title="Test" />
    <div className={styles.contactContainer}>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere quis
        repellat repudiandae autem assumenda voluptate, hic iusto sed temporibus
        officiis veniam nesciunt. Voluptas quis adipisci fugit porro laudantium
        tempore quas.
      </p>
      <form>
        <ul className={styles.flexForm}>
          <li>
            <label htmlFor="email">EMAIL</label>
            <input type="email" name="email" id="email" />
          </li>
          <li>
            <label htmlFor="name">NAME</label>
            <input type="text" name="name" id="name" />
          </li>
          <li>
            <label htmlFor="message">MESSAGE</label>
            <textarea name="message" id="message" rows="10"></textarea>
          </li>
        </ul>
      </form>
    </div>
  </Layout>
)

export default LongPageNamePage
