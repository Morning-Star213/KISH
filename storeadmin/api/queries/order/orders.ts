import { orderFragment, paginationFragment } from '@/api/fragments'
import gql from 'graphql-tag'

export default gql`
  query orders($brandId: ID!, $page: Int, $perPage: Int, $search: OrderSearch) {
    orders(brandId: $brandId, page: $page, perPage: $perPage, search: $search) {
      orders {
        ...orderFragment
      }
      pagination {
        ...paginationFragment
      }
    }
  }
  ${orderFragment}
  ${paginationFragment}
`
