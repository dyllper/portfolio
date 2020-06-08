import React from "react"
import PropTypes from "prop-types"
import { SocialIcon } from "react-social-icons"

import Header from "./header"

import styles from "../styles/layout.module.scss"

const Layout = ({ pageName, children }) => (
  <div className={styles.appContainer}>
    <Header pageName={pageName} />
    <main className={styles.appBody}>{children}</main>
    <footer className={styles.footer}>
      <div>© Dylan Perkins {new Date().getFullYear()}</div>
      <div className={styles.socialIcons}>
        <SocialIcon
          url="https://twitter.com/Dyllper"
          style={{ width: 25, height: 25 }}
        />
        <SocialIcon
          url="https://github.com/dyllper"
          style={{ width: 25, height: 25 }}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/perkinsdylan/"
          style={{ width: 25, height: 25 }}
        />
      </div>
    </footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string.isRequired,
}

export default Layout
