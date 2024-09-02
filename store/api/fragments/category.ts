import gql from 'graphql-tag'

export default gql`
  fragment categoryFragment on Category {
    id
    name
  }
`
