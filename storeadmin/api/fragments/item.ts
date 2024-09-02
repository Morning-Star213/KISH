import gql from 'graphql-tag'

export default gql`
  fragment itemFragment on Item {
    id
    uuid
    orderId
    listingId
    price
  }
`
