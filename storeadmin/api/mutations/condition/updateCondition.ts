import { conditionFragment } from '@/api/fragments'
import gql from 'graphql-tag'

export default gql`
  mutation updateCondition($uuid: ID!, $attributes: ConditionAttributes!) {
    updateCondition(input: { uuid: $uuid, attributes: $attributes }) {
      condition {
        ...conditionFragment
      }
      error
    }
  }
  ${conditionFragment}
`
