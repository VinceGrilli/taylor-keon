import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import logo from "../images/logo.png"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()}, Site crafted by
          {` `}
          <a href="https://www.builttocode.dev">
            <img
              style={{
                marginBottom: `-0.35rem`,
                maxWidth: `5rem`,
              }}
              src={logo}
              alt="Built to Code"
            />
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
