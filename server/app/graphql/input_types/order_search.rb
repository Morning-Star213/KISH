class InputTypes::OrderSearch < Types::BaseInputObject
  graphql_name "OrderSearch"

  argument :keyword, String, required: false
end
