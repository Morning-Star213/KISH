import { imageFragment, productFragment } from '@/api/fragments'
import gql from 'graphql-tag'

export default gql`
  mutation updateProductImage($id: ID!, $file: File!) {
    updateProductImage(input: { id: $id, file: $file }) {
      product {
        ...productFragment
        images {
          ...imageFragment
        }
      }
      error
    }
  }
  ${imageFragment}
  ${productFragment}
`
