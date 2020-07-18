import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../styles/contact.module.scss"

const LongPageNamePage = () => {
  const [formState, setFormState] = useState({
    email: "",
    name: "",
    message: "",
  })

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState }),
    })
      .then(() => {
        alert("Your message has been submitted!")
        setFormState({
          email: "",
          name: "",
          message: "",
        })
      })
      .catch(error => alert(error))
  }

  return (
    <Layout pageName="Contact Me">
      <SEO title="Contact" />
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
            quis repellat repudiandae autem assumenda voluptate, hic iusto sed
            temporibus officiis veniam nesciunt. Voluptas quis adipisci fugit
            porro laudantium tempore quas.
          </p>
          <form
            name="contact"
            method="post"
            className={styles.flexForm}
            onSubmit={handleSubmit}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <ul>
              <li>
                <label htmlFor="email">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  value={formState.email}
                />
              </li>
              <li>
                <label htmlFor="name">NAME</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleChange}
                  value={formState.name}
                />
              </li>
              <li>
                <label htmlFor="message">MESSAGE</label>
                <textarea
                  name="message"
                  id="message"
                  onChange={handleChange}
                  value={formState.message}
                ></textarea>
              </li>
              <li>
                <button type="submit">Submit</button>
              </li>
            </ul>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default LongPageNamePage
