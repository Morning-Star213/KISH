class InputTypes::ProductSearch < Types::BaseInputObject
  graphql_name "ProductSearch"

  argument :keyword, String, required: false
  argument :is_resale, String, required: false
  argument :is_archive, String, required: false
end
