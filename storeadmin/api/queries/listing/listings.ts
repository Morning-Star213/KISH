import {
  listingFragment,
  paginationFragment,
  productFragment,
  productMasterFragment,
} from '@/api/fragments'
import gql from 'graphql-tag'

export default gql`
  query listings($brandId: ID!, $page: Int, $perPage: Int, $search: ListingSearch) {
    listings(brandId: $brandId, page: $page, perPage: $perPage, search: $search) {
      listings {
        ...listingFragment
        product {
          ...productFragment
          productMaster {
            ...productMasterFragment
          }
          color {
            ...colorFragment
          }
        }
      }
      pagination {
        ...paginationFragment
      }
    }
  }
  ${listingFragment}
  ${paginationFragment}
  ${productFragment}
  ${productMasterFragment}
`
