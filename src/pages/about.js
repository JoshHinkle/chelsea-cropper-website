import React from "react"
import Layout from "../components/layout";
import { graphql, StaticQuery } from "gatsby";
import AboutMeContent from "../components/about-me/about-me-content"
import SEO from "../components/seo"

export default class About extends React.Component {

  render() {
    return (
      <Layout category="about">
        <SEO title="About"/>
        <StaticQuery
          query={aboutMeQuery}
          render={data => (<AboutMeContent content={data} />)}
        />
      </Layout>
    )
  }

}

const aboutMeQuery = graphql
  `query aboutMe {
    aboutMeJson {
      data {
        introParagraph
        imagePath
        resumeFields {
          title
          entries {
            content
            date
            subtitle
            title
          }
        }
        title
      }
    }
  }
`