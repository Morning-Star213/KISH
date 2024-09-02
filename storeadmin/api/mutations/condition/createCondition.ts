import { conditionFragment } from '@/api/fragments'
import gql from 'graphql-tag'

export default gql`
  mutation createCondition($attributes: ConditionAttributes!) {
    createCondition(input: { attributes: $attributes }) {
      condition {
        ...conditionFragment
      }
      error
    }
  }
  ${conditionFragment}
`
