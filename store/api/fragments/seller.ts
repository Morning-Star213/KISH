import gql from 'graphql-tag'

export default gql`
  fragment sellerFragment on Seller {
    id
    name
  }
`
