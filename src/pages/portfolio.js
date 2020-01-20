import React from "react"
import { Router } from "@reach/router"
import { login, isAuthenticated, getProfile } from "../utils/auth"
import { Link, graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import ExperienceSelection from "../components/portfolio/experience-selection"
import SEO from "../components/seo"

const Portfolio = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }
  return (
    <Layout category="work">
        <SEO title="Work" />
        <StaticQuery
          query={experienceSelectionQuery}
          render={data => (<ExperienceSelection content={data} />)}
        />
    </Layout>
  )
}

export default Portfolio

const experienceSelectionQuery = graphql`
  query ExperienceSelectionQuery {
    experienceSelectionJson {
      data {
        title
        imagePath
        description
        slug
      }
    }
  }
`