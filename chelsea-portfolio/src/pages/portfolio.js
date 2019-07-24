import React from "react"
import { Router } from "@reach/router"
import { login, isAuthenticated, getProfile } from "../utils/auth"
import { Link, graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import ExperienceSelection from "../components/portfolio/experience-selection"
import SEO from "../components/seo"

const Home = ({ user }) => {
  return <p>Hi, {user.name ? user.name : "friend"}!</p>
}
const Settings = () => <p>Settings</p>
const Billing = () => <p>Billing</p>

const Portfolio = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
    <>
      <Layout category="work">
          <SEO title="portfolio" />
          <StaticQuery
            query={experienceSelectionQuery}
            render={data => (<ExperienceSelection content={data} />)}
          />
      </Layout>
      
    </>
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