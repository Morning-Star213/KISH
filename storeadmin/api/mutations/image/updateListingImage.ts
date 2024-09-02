import { imageFragment, listingFragment } from '@/api/fragments'
import gql from 'graphql-tag'

export default gql`
  mutation updateListingImage($id: ID!, $file: File!) {
    updateListingImage(input: { id: $id, file: $file }) {
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
