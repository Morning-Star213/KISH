import gql from 'graphql-tag'

export default gql`
  fragment colorFragment on Color {
    id
    name
  }
`
