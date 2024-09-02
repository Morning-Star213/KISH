import gql from 'graphql-tag'

export default gql`
  fragment userFragment on User {
    id
    email
    role
    firstName
    lastName
    confirmationToken
    fullName
    organizationId
  }
`
