import gql from 'graphql-tag'

export default gql`
  fragment paginationFragment on Pagination {
    resultsCount
    totalCount
    totalPages
    currentPage
    currentCount
    nextPage
    previousPage
    hasNextPage
    hasPreviousPage
  }
`
