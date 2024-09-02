import { productFragment, productMasterFragment } from '@/api/fragments'
import gql from 'graphql-tag'

export default gql`
  mutation updateProduct($uuid: ID!, $attributes: ProductAttributes!) {
    updateProduct(input: { uuid: $uuid, attributes: $attributes }) {
      product {
        ...productFragment
        productMaster {
          ...productMasterFragment
        }
      }
      error
    }
  }
  ${productFragment}
  ${productMasterFragment}
`
