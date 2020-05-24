import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"

const Contact = () => {
  return (
    <div>
      <Layout>
        <Head title="Links" />
        <h1>Links</h1>
        <ul>
          <li>
            <p>
              <a
                href="https://robertocastelli.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Official Site
              </a>
            </p>
          </li>

          <li>
            <p>
              <a
                href="https://www.linkedin.com/in/roberto-castelli-teal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </p>
          </li>
          <li>
            <p>
              <a
                href="https://github.com/RobertoCastelli"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </p>
          </li>
          <li>
            <p>
              <a
                href="https://www.robertocastelli.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blogger
              </a>
            </p>
          </li>
        </ul>
      </Layout>
    </div>
  )
}

export default Contact
