import gql from 'graphql-tag'

export default gql`
  fragment productMasterFragment on ProductMaster {
    id
    uuid
    brandId
    name
    code
    description
    price
    priceTotal
    care
    sex
    sexI18n
    year
  }
`
