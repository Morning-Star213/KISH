import gql from 'graphql-tag'

export default gql`
  fragment sizeFragment on Size {
    id
    name
  }
`
