import {
  productFragment,
  productMasterFragment,
  categoryFragment,
  colorFragment,
} from '@/api/fragments'
import gql from 'graphql-tag'

export default gql`
  query products($brandId: ID!, $page: Int, $perPage: Int, $search: ProductSearch) {
    products(brandId: $brandId, page: $page, perPage: $perPage, search: $search) {
      products {
        ...productFragment
        productMaster {
          ...productMasterFragment
          categories {
            ...categoryFragment
          }
        }
        color {
          ...colorFragment
        }
      }
      pagination {
        ...paginationFragment
      }
    }
  }
  ${productFragment}
  ${productMasterFragment}
  ${categoryFragment}
  ${colorFragment}
`
