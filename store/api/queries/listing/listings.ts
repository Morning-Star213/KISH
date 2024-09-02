import {
  listingFragment,
  imageFragment,
  paginationFragment,
  productFragment,
  productMasterFragment,
  sizeFragment,
} from "@/api/fragments";
import gql from "graphql-tag";

export default gql`
  query listings(
    $brandId: ID!
    $page: Int
    $perPage: Int
    $search: ListingSearch
  ) {
    listings(
      brandId: $brandId
      page: $page
      perPage: $perPage
      search: $search
    ) {
      listings {
        ...listingFragment
        product {
          ...productFragment
          productMaster {
            ...productMasterFragment
            sizes {
              ...sizeFragment
            }
          }
          images {
            ...imageFragment
          }
          color {
            ...colorFragment
          }
          sizes {
            ...sizeFragment
          }
        }
      }
      pagination {
        ...paginationFragment
      }
    }
  }
  ${listingFragment}
  ${imageFragment}
  ${paginationFragment}
  ${productFragment}
  ${productMasterFragment}
  ${sizeFragment}
`;
