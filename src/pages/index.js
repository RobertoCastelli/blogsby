import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Welcome to my Blog</h1>
      <p>
        An evolving story of a 40 y.o. kid that wants to become an agile
        software craftman
      </p>
    </Layout>
  )
}

export default IndexPage
