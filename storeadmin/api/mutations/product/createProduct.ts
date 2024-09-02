import { productFragment } from '@/api/fragments'
import gql from 'graphql-tag'

export default gql`
  mutation createProduct($productMaster: ProductMasterAttributes!, $product: ProductAttributes!) {
    createProduct(input: { productMaster: $productMaster, product: $product }) {
      product {
        ...productFragment
      }
      error
    }
  }
  ${productFragment}
`
