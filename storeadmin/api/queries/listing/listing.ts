import {
  categoryFragment,
  colorFragment,
  conditionFragment,
  imageFragment,
  listingFragment,
  productFragment,
  productMasterFragment,
  sizeFragment,
} from '@/api/fragments'
import gql from 'graphql-tag'

export default gql`
  query listing($brandId: ID!, $uuid: ID!) {
    listing(uuid: $uuid) {
      ...listingFragment
      product {
        ...productFragment
        productMaster {
          ...productMasterFragment
          sizes {
            ...sizeFragment
          }
          categories {
            ...categoryFragment
          }
        }
        color {
          ...colorFragment
        }
        images {
          ...imageFragment
        }
      }
      size {
        ...sizeFragment
      }
      images {
        ...imageFragment
      }
    }
    conditions(brandId: $brandId) {
      ...conditionFragment
    }
  }
  ${listingFragment}
  ${imageFragment}
  ${productFragment}
  ${productMasterFragment}
  ${categoryFragment}
  ${colorFragment}
  ${sizeFragment}
  ${conditionFragment}
`
