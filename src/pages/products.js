import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ProductItem from '../components/product-item'

class Products extends React.Component {
  render() {
    const products = get(this, 'props.data.products.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="PRODUCTS" />
        <Hero title="PRODUCTS" />
        <ProductItem products={products} /> 
      </Layout>
    )
  }
}

export default Products

export const pageQuery = graphql`
  query ProductsQuery {
    products: allContentfulProducts(sort: {fields: title, order: ASC}) {
      nodes {
        title
        price
        description
        specifications {
          childMarkdownRemark {
            html
          } 
        }  
        featuredImage {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH, aspectRatio: 1)
        }
      }
    }
  }
`
