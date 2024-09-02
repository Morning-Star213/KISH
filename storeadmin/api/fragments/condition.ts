import gql from 'graphql-tag'

export default gql`
  fragment conditionFragment on Condition {
    id
    uuid
    name
    tradeInRate
    resaleRate
  }
`
