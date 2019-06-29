import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

export default function projectTemp({data}){
    const {title}=data.contentfulProject
    const {description}=data.contentfulProject.description
    const {fluid}=data.contentfulProject.visual

  return (
    <Layout>
      <h1 style={{color:'orange'}}>Single project</h1>
      {title}
      <Img fluid={fluid}/>
      <p>{description}</p>
      
      
      <Link to="/projects">back to portfolio</Link>
    </Layout>
  )
}
export const query = graphql`
query ($id: String) {
    contentfulProject(id: {eq: $id}) {
      title
      description {
        description
      }
      visual {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`
