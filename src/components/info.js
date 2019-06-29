import React from 'react'
import {StaticQuery,graphql} from 'gatsby'

const getData=graphql`
{
  info:site{
    siteMetadata{
      title
      
      description
      author
    }
  }
}
`

export default () => {
  return (
      <StaticQuery query={getData} render={data=>{
          const siteData =data.info.siteMetadata
          const {title,author,description}=siteData;
          return(
              <div>
              <div>title:{title}</div>
              <div>author:{author}</div>
              <p>desription:{description}</p>
              
              </div>
          )
        }}
        />
  )
}
