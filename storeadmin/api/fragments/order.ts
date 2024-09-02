import gql from 'graphql-tag'

export default gql`
  fragment orderFragment on Order {
    id
    uuid
    brandId
    orderNumber
    orderDate
    totalPrice
    status
    statusI18n
    paymentStatus
    paymentStatusI18n
    shippingStatus
    shippingStatusI18n
  }
`
