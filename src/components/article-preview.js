/** Article Preview COMPONENT **/
import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const ArticlePreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <div className="container">
      <div className="row">
        {posts.map((post) => {
          return (
            <article className="col-sm-6 col-md-4" key={post.slug}>
              <Link to={`/blog/${post.slug}`} className="link">
                <GatsbyImage alt="" image={post.heroImage.gatsbyImageData} />
                <h2 className="title my-3">{post.title}</h2>
              </Link>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.description.childMarkdownRemark.html,
                }}
              />
              <div>
                <p><small><i>{post.publishDate}</i></small></p>
                {/* <Tags tags={post.tags} /> */}
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default ArticlePreview



// <Container>
//       <ul className="articleList">
//         {posts.map((post) => {
//           return (
//             <li key={post.slug}>
//               <Link to={`/blog/${post.slug}`} className="link">
//                 <GatsbyImage alt="" image={post.heroImage.gatsbyImageData} />
//                 <h2 className="title">{post.title}</h2>
//               </Link>
//               <div
//                 dangerouslySetInnerHTML={{
//                   __html: post.description.childMarkdownRemark.html,
//                 }}
//               />
//               <div className="meta">
//                 <small className="meta">{post.publishDate}</small>
//                 <Tags tags={post.tags} />
//               </div>
//             </li>
//           )
//         })}
//       </ul>
//     </Container>