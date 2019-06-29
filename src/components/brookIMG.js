import React from 'react'
import Img from 'gatsby-image'
import {StaticQuery,graphql} from 'gatsby';

const getBrook=graphql`
{
    file(relativePath: {eq:"brook.jpg"}) {
      childImageSharp{
        fluid(maxWidth:1000){
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default () => {
  return (
      <StaticQuery query={getBrook} render={data=>{
          return <div style={{maxWidth:1000}}><Img fluid={data.file.childImageSharp.fluid}/></div>
      }}/>
   
  )
}
