/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import NavBar from "./common/navbar"
import "../css/normalize.css"
import "../css/skeleton.css"
import "../css/main.css"

const Layout = ({ children, category }) => {
  return (
    <div>
      <NavBar category={category}/>
        <div className="container">
          <main>{children}</main>
          <footer>
          </footer>
        </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
