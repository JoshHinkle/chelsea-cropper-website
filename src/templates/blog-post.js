import React from "react"
import Layout from "../components/layout"
import {isAuthenticated, login} from "../utils/auth"

const BlogPost = () => {

    if (!isAuthenticated()) {
      login()
      return <p>Redirecting to login...</p>
    }

  return (
    <Layout>
      <div>Hello blog post</div>
    </Layout>
  )
}

export default BlogPost