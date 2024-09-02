import gql from 'graphql-tag'

export default gql`
  fragment imageFragment on Image {
    id
    resourceId
    resourceType
    image
    imageUrl
  }
`
