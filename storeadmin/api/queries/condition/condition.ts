import { conditionFragment } from '@/api/fragments'
import gql from 'graphql-tag'

export default gql`
  query condition($uuid: ID!) {
    condition(uuid: $uuid) {
      ...conditionFragment
    }
  }
  ${conditionFragment}
`
