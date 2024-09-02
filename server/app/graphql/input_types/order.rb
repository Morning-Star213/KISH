class InputTypes::Order< Types::BaseInputObject
  graphql_name "OrderAttributes"

  argument :status, String, required: false
  argument :payment_status, String, required: false
  argument :shipping_status, String, required: false
end
