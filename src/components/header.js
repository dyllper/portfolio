import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import TypeWriter from "react-typewriter"

import styles from "../styles/header.module.css"

const Header = ({ pageName }) => {
  return (
    <header className={styles.headerContainer}>
      <span>&gt;</span>
      <TypeWriter typing={1} initDelay={100}>
        <span className={styles.typewriter}>{pageName}</span>
      </TypeWriter>
      <ul className={styles.navLinks}>
        <li className={styles.link}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.link}>
          <Link to="/about">About</Link>
        </li>
        <li className={styles.link}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
