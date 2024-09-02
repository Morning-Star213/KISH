class InputTypes::ProductMaster < Types::BaseInputObject
  graphql_name "ProductMasterAttributes"

  argument :brand_id, ID, required: false
  argument :name, String, required: false
  argument :code, String, required: false
  argument :description, String, required: false
  argument :sex, String, required: false
  argument :care, String, required: false
  argument :year, String, required: false
  argument :price, Int, required: false
  argument :price_total, Int, required: false
  argument :size_ids, [ID], required: false
  argument :category_ids, [ID], required: false
end
