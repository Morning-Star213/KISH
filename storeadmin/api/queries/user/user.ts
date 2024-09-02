import { userFragment } from '@/api/fragments'
import gql from 'graphql-tag'

export default gql`
  query user($id: ID!) {
    user(id: $id) {
      ...userFragment
    }
  }
  ${userFragment}
`
