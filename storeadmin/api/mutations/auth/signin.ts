import { brandFragment, organizationFragment, userFragment } from '@/api/fragments'
import gql from 'graphql-tag'

export default gql`
  mutation signin($email: String!, $password: String!) {
    signin(input: { email: $email, password: $password }) {
      user {
        ...userFragment
        organization {
          ...organizationFragment
          brands {
            ...brandFragment
          }
        }
      }
      error
    }
  }
  ${brandFragment}
  ${userFragment}
  ${organizationFragment}
`
