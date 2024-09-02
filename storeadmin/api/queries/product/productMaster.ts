import { productMasterFragment } from '@/api/fragments'
import gql from 'graphql-tag'

export default gql`
  query productMaster($brandId: ID!, $code: String!) {
    productMaster(brandId: $brandId, code: $code) {
      ...productMasterFragment
    }
  }
  ${productMasterFragment}
`
