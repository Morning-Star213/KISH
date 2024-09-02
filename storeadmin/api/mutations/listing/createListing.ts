import { listingFragment, productFragment } from '@/api/fragments'
import gql from 'graphql-tag'

export default gql`
  mutation createListing($uuid: ID!) {
    createListing(input: { uuid: $uuid }) {
      listing {
        ...listingFragment
        product {
          ...productFragment
        }
      }
      error
    }
  }
  ${listingFragment}
  ${productFragment}
`
