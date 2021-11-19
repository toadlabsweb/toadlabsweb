import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Tags from '../components/tags'
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')

    return (
      <Layout location={this.props.location}>
        <Seo
          title={post.title}
          description={post.description.childMarkdownRemark.excerpt} 
        />
        
        <div className="container">

        <Hero
          image={post.heroImage?.gatsbyImageData}
          title={post.title}
          content={post.description?.childMarkdownRemark?.excerpt}
        />
          <span className="meta text-white">
            {post.author?.name} &middot;{' '}
            <time dateTime={post.rawDate}>{post.publishDate}</time> –{' '}
            {post.body?.childMarkdownRemark?.timeToRead} minute read
          </span>
          <div className="">
            <div
              className="body pt-5"
              dangerouslySetInnerHTML={{
                __html: post.body?.childMarkdownRemark?.html,
              }}
            />
            <hr className="text-white mt-5"/>
            <Tags tags={post.tags} />
            {(previous || next) && (
              <nav>
                <ul className="articleNavigation">
                  {previous && (
                    <li>
                      <Link to={`/blog/${previous.slug}`} rel="prev">
                      <IoChevronBackOutline className="footer-icons mx-3" /> {previous.title}  
                      </Link>
                    </li>
                  )}
                  {next && (
                    <li>
                      <Link to={`/blog/${next.slug}`} rel="next">
                        {next.title} <IoChevronForwardOutline className="footer-icons mx-3" />
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      author {
        name
      }
      publishDate(formatString: "MMMM Do, YYYY")
      rawDate: publishDate
      heroImage {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, height: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
      body {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
      tags
      description {
        childMarkdownRemark {
          excerpt
        }
      }
    }
    previous: contentfulBlogPost(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulBlogPost(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
`
