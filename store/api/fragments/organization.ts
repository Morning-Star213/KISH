import gql from 'graphql-tag'

export default gql`
  fragment organizationFragment on Organization {
    id
    name
  }
`
