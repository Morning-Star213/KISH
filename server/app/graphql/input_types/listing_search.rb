class InputTypes::ListingSearch < Types::BaseInputObject
  graphql_name "ListingSearch"

  argument :keyword, String, required: false
end
