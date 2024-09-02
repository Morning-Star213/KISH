import gql from 'graphql-tag'

export default gql`
  fragment productFragment on Product {
    id
    uuid
    status
    isResale
    isArchive
    colorId
  }
`
