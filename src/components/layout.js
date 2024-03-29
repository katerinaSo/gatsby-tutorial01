/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import {createGlobalStyle} from 'styled-components'
import Header from "./header"



const GlobalStyle=createGlobalStyle`
body{
font-family:Arial, Helvetica, sans-serif;
}
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            
          }
        }
      }
    `}
    render={data => (
      <>
      <GlobalStyle/>
        <Header siteTitle={data.site.siteMetadata.title }/>
        
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, website by
            {` `}
            <a href="https://ksportfolio.netlify.com">Katya</a>
          </footer>
        </div>
        
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
