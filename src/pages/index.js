import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../components/index.css"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="App">
      <h1 className="Crabs">CRABS CRABS CRABS CRABS CRABS CRABS</h1>
      <div className="App-logo" style={{ maxWidth: `300px` }}>
        <Image />
      </div>
      <h1 className="Crabs">CRABS CRABS CRABS CRABS CRABS CRABS</h1>
    </div>
  </Layout>
)

export default IndexPage
