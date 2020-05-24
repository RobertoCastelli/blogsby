import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import LayoutStyles from "./Layout.module.scss"
import "../styles/index.scss"

const Layout = props => {
  return (
    <div className={LayoutStyles.container}>
      <div className={LayoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
