import { imageFragment, productFragment } from '@/api/fragments'
import gql from 'graphql-tag'

export default gql`
  mutation createProductImage($uuid: ID!, $file: File!) {
    createProductImage(input: { uuid: $uuid, file: $file }) {
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
