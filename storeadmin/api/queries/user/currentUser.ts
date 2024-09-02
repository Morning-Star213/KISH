import { brandFragment, organizationFragment, sellerFragment, userFragment } from '@/api/fragments'
import gql from 'graphql-tag'

export default gql`
  query currentUser {
    currentUser {
      ...userFragment
      organization {
        ...organizationFragment
        brands {
          ...brandFragment
        }
        sellers {
          ...sellerFragment
        }
      }
    }
  }
  ${brandFragment}
  ${userFragment}
  ${organizationFragment}
  ${sellerFragment}
`
