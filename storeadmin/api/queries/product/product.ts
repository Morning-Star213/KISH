import {
  imageFragment,
  productFragment,
  productMasterFragment,
  categoryFragment,
  colorFragment,
  sizeFragment,
} from '@/api/fragments'
import gql from 'graphql-tag'

export default gql`
  query product($brandId: ID!, $uuid: ID!) {
    product(uuid: $uuid) {
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
      images {
        ...imageFragment
      }
    }
    colors(brandId: $brandId) {
      ...colorFragment
    }
    sizes(brandId: $brandId) {
      ...sizeFragment
    }
    categories(brandId: $brandId) {
      ...categoryFragment
    }
  }
  ${imageFragment}
  ${productFragment}
  ${productMasterFragment}
  ${categoryFragment}
  ${colorFragment}
  ${sizeFragment}
`
