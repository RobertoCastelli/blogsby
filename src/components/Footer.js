import React from "react"
import FooterStyles from "./Footer.module.scss"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={FooterStyles.footer}>
      <p>Powered with Gatsby</p>
      copyright &copy; 2020 {data.site.siteMetadata.author}
      <p>www.robertocastelli.dev</p>
    </footer>
  )
}

export default Footer
