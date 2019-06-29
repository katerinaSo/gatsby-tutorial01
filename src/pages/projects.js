import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <h1>my projects:</h1>
      {data.projects.edges.map(({ node: project }) => {
        return (
          <div key={project.id}>
            <div style={{ textAlign: "center", paddingTop: "2em" }}>
              <h3>{project.title}</h3>
              <Img fixed={project.visual.fixed} />
            </div>
            <div
              style={{
                textAlign: "center",
                paddingBottom: "3em",
                borderBottom: "0.3em solid black",
              }}
            >
              <Link to={`/projects/${project.title}`}>solution details</Link>
              {/* <p style={{ textAlign: "left" }}>
                {project.description.description}
              </p> */}
            </div>
          </div>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  {
    projects: allContentfulProject {
      edges {
        node {
          id
          title
          description {
            description
          }
          visual {
            fixed(width: 300) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`
