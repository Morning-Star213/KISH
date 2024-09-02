import { listingFragment } from '@/api/fragments'
import gql from 'graphql-tag'

export default gql`
  mutation updateListing($uuid: ID!, $attributes: ListingAttributes!) {
    updateListing(input: { uuid: $uuid, attributes: $attributes }) {
      listing {
        ...listingFragment
      }
      error
    }
  }
  ${listingFragment}
`
