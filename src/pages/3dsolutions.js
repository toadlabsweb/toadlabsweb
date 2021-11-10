import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero' 
import SolutionsItem from '../components/solutions-item'

class Solutions extends React.Component {
  render() {
    const solutions = get(this, 'props.data.solutions.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="3D SOLUTIONS" />
        <Hero title="3D SOLUTIONS" />
        <SolutionsItem solutions={solutions} />  
      </Layout>
    )
  }
}

export default Solutions

export const pageQuery = graphql`
  query SolutionsQuery {
    solutions: allContentfulSolutions(sort: {fields: title, order: ASC}) {
        nodes {
          title
          slug
          description
          price
          image {
            gatsbyImageData(placeholder: BLURRED, height: 480)
          }
        }
      }
    }
`
