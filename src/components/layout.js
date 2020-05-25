import React from "react"
import PropTypes from "prop-types"

import Header from "./header"

import styles from "../styles/layout.module.css"

const Layout = ({ pageName, children }) => (
  <div className={styles.appContainer}>
    <Header pageName={pageName} />
    <main className={styles.appBody}>{children}</main>
    {/*TODO: Update the Footer*/}
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string.isRequired,
}

export default Layout
