import gql from 'graphql-tag'

export default gql`
  fragment brandFragment on Brand {
    id
    name
  }
`
