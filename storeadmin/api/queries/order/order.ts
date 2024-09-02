import {
  orderFragment,
  itemFragment,
  listingFragment,
  imageFragment,
  productFragment,
  productMasterFragment,
  colorFragment,
} from '@/api/fragments'
import gql from 'graphql-tag'

export default gql`
  query order(brandId: ID!, $uuid: ID!) {
    order(brandId: $brandId, uuid: $uuid) {
      ...orderFragment
      items {
        ...itemFragment
        listing {
          ...listingFragment
          product {
            ...productFragment
            productMaster {
              ...productMasterFragment
            }
            images {
              ...imageFragment
            }
            color {
              ...colorFragment
            }
          }
        }
      }
    }
  }
  ${orderFragment}
  ${itemFragment}
  ${listingFragment}
  ${productFragment}
  ${productMasterFragment}
  ${imageFragment}
  ${colorFragment}
`
