import { conditionFragment } from '@/api/fragments'
import gql from 'graphql-tag'

export default gql`
  query conditions($brandId: ID!) {
    conditions(brandId: $brandId) {
      ...conditionFragment
    }
  }
  ${conditionFragment}
`
