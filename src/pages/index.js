import React from "react"
import { graphql } from 'gatsby'

import Nav from '../components/Nav'
import Header from '../components/Header'

const IndexPage = ({data}) => {
  const {contentfulIndex} = data;

  return (
    <div>
      <Nav></Nav>

      <Header title={contentfulIndex.longTitle}></Header>
    </div>
  )
}

export default IndexPage

export const query = graphql`
query {
  contentfulIndex {
    id
    longTitle    
  }
}
`