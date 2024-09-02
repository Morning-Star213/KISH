class InputTypes::Product < Types::BaseInputObject
  graphql_name "ProductAttributes"

  argument :brand_id, ID, required: false
  argument :color_id, ID, required: false
  argument :status, String, required: false
  argument :is_resale, Boolean, required: false
  argument :is_archive, Boolean, required: false
end
