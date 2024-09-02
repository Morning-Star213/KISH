import gql from 'graphql-tag'

export default gql`
  fragment listingFragment on Listing {
    id
    uuid
    organizationId
    brandId
    sellerId
    productId
    conditionId
    sizeId
    status
    statusI18n
    repairMethod
    repairMethodI18n
    comment
    price
  }
`
