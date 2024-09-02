import { imageFragment, listingFragment } from '@/api/fragments'
import gql from 'graphql-tag'

export default gql`
  mutation createListingImage($uuid: ID!, $file: File!) {
    createListingImage(input: { uuid: $uuid, file: $file }) {
      listing {
        ...listingFragment
        images {
          ...imageFragment
        }
      }
      error
    }
  }
  ${imageFragment}
  ${listingFragment}
`
