const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve('./src/templates/blog-post.js')

  const blogresult = await graphql(
    `
      {
        allContentfulBlogPost {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  if (blogresult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      blogresult.errors
    )
    return
  }

  const posts = blogresult.data.allContentfulBlogPost.nodes

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostSlug = index === 0 ? null : posts[index - 1].slug
      const nextPostSlug =
        index === posts.length - 1 ? null : posts[index + 1].slug

      createPage({
        path: `/blog/${post.slug}/`,
        component: blogPost,
        context: {
          slug: post.slug,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
  }

/**********************************************************************************/
  // Define a template for Solutions post
  const solutionsPost = path.resolve('./src/templates/solutions-post.js')

  const solutionsresult = await graphql(
    `
      {
        allContentfulSolutions {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  if (solutionsresult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Solutions posts`,
      solutionsresult.errors
    )
    return
  }

  const solutions = solutionsresult.data.allContentfulSolutions.nodes

  // Create Solution posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (solutions.length > 0) {
    solutions.forEach((solution, index) => {
      const previousSolutionSlug = index === 0 ? null : solutions[index - 1].slug
      const nextSolutionSlug =
        index === solutions.length - 1 ? null : solutions[index + 1].slug

      createPage({
        path: `/3dsolution/${solution.slug}/`,
        component: solutionsPost,
        context: {
          slug: solution.slug,
          previousSolutionSlug,
          nextSolutionSlug,
        },
      })
    })
  }








}
