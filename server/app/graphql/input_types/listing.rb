class InputTypes::Listing< Types::BaseInputObject
  graphql_name "ListingAttributes"

  argument :seller_id, ID, required: false
  argument :size_id, ID, required: false
  argument :condition_id, ID, required: false
  argument :status, String, required: false
  argument :repair_method, String, required: false
  argument :comment, String, required: false
  argument :price, Int, required: false
end
