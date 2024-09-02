import gql from 'graphql-tag';

export default gql`
  mutation signout {
    signout(input: {}) {
      result
    }
  }
`;
