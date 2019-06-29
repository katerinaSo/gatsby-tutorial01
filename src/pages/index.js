import React from "react"
import { Link } from "gatsby"
import { FaPalette, FaGithub } from "react-icons/fa"
import Info from "../components/info"
import Layout from "../components/layout"

import SEO from "../components/seo"
import { ClearButton } from "../components/Buttons"
import Brook from "../components/brookIMG"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <Link to="/projects/">
        <h2>projects</h2>
      </Link>

      <Link to="/page-2/">
        <ClearButton>
          <FaPalette style={{ fontSize: "5em" }} />{" "}
        </ClearButton>
      </Link>
      <ClearButton>
        <FaGithub style={{ fontSize: "5em" }} />{" "}
      </ClearButton>
      {/* <Info/> */}
      {/* <div>
        <Link to="/images/">images links</Link>
      </div> */}
    </div>

    <div style={{ maxWidth: `100vw`, marginBottom: `1.45rem` }}>
      
      <Brook />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
