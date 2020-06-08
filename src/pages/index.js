import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Spacer from "../components/common/spacer"
import Homepage from "../components/home/homepage";

const homepageQuery = graphql`
          query HomepageContent {
  homepageJson {
    data {
      landing {
        title
        introParagraph {
          content
        }
        buttonText
      }
      process {
        columns {
          content
          title
        }
        title
      }
      contact {
        content
      }
    }
  }
}
      `

const IndexPage = () => (
  <Layout category="home">
    <SEO title="" />
    <StaticQuery 
      query={homepageQuery}
      render={data => (<Homepage content={data} />)}
    />
    <Spacer height="30"/>
  </Layout>
)



export default IndexPage
