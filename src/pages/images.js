import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => {
  const images = data.allFile.edges
  return (
    <Layout>
      <div>
        {images.map(({ node }, index) => {
          return <p key={index}>{node.relativePath}</p>
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile {
      edges {
        node {
          relativePath
        }
      }
    }
  }
`
