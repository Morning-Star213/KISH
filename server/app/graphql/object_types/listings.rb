class ObjectTypes::Listings < Types::BaseObject
  graphql_name "Listings"

  field :listings, [ObjectTypes::Listing], null: false
  def listings
    object
  end

  field :pagination, ObjectTypes::Pagination, null: false
  def pagination
    object
  end
end
