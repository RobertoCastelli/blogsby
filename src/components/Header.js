import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import HeaderStyles from "./Header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={HeaderStyles.header}>
      <h1>
        <Link to="/" className={HeaderStyles.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={HeaderStyles.navList}>
          <li>
            <Link
              to="/"
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
            >
              contact
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
            >
              about
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
            >
              blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
