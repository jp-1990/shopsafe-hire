import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Confirmation from "../components/Confirmation/Confirmation"

const SecondPage = () => {
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Confirmation />
    </Layout>
  )
}

export default SecondPage
