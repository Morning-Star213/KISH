import { productMasterFragment, categoryFragment, sizeFragment } from '@/api/fragments'
import gql from 'graphql-tag'

export default gql`
  mutation updateProductMaster($uuid: ID!, $attributes: ProductMasterAttributes!) {
    updateProductMaster(input: { uuid: $uuid, attributes: $attributes }) {
      productMaster {
        ...productMasterFragment
        sizes {
          ...sizeFragment
        }
        categories {
          ...categoryFragment
        }
      }
      error
    }
  }
  ${productMasterFragment}
  ${sizeFragment}
  ${categoryFragment}
`
