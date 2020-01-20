/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import NavBar from "./common/navbar"
import "../css/normalize.css"
import "../css/skeleton.css"
import "../css/main.css"


class Layout extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      loaded: true
    }
  }

  componentDidMount() {
    import('scrollreveal').then(({ default: ScrollReveal }) => {
      const sr = ScrollReveal()
      sr.reveal('.under-nav div')
    })
  }
  render() {
    let { children, category } = this.props
    return (
      <div>
        <NavBar category={category} />
        <div className="container load-hidden">
          <div className="under-nav">
            <main>{children}</main>
            <footer></footer>
          </div>
        </div>
      </div>
    )
  }
  
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
