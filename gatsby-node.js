const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allContentfulProject {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `)
    .then(result => {
      result.data.allContentfulProject.edges.forEach(({ node }) => {
        createPage({
          path:`projects/${node.title}`,
          component: path.resolve(`src/templates/projectTemp.js`),
          context: {
            id: node.id,
          },
        })
      })
    })
    .catch(err => {
      console.log(err)
    })
}
