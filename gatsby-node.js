/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)


exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/portfolio/)) {
    page.matchPath = "/portfolio/*"

    // Update the page.
    createPage(page)
  }
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    /*
     * During the build step, `auth0-js` will break because it relies on
     * browser-specific APIs. Fortunately, we don’t need it during the build.
     * Using Webpack’s null loader, we’re able to effectively ignore `auth0-js`
     * during the build. (See `src/utils/auth.js` to see how we prevent this
     * from breaking the app.)
     */
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /auth0-js/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}


exports.createPages = ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions
  return graphql(`
    {
  experienceSelectionJson {
    data {
      slug
      pageContent {
        hideDisclaimer
        disclaimer
        version
        image0
        image1
        image10
        image11
        image12
        image13
        image14
        image15
        image16
        image2
        image3
        image4
        image6
        image5
        image7
        image8
        image9
        rowSummary {
          content
          title
        }
        section1 {
          title
          content
        }
        section2 {
          title
          content
        }
        section3 {
          title
          content
        }
        section4 {
          title
          content
        }
        section6 {
          title
          content
        }
        section7 {
          title
        }
        title
        section5 {
          title
          content
        }
        summary
      }
    }
  }
    }
  `).then(result => {
    result.data.experienceSelectionJson.data.forEach((item) => {
      createPage({
        path: `/portfolio/${item.slug}`,
        component: path.resolve(`./src/templates/experience-page.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: item.slug,
          data: item
        }
      })
    })
  })
}