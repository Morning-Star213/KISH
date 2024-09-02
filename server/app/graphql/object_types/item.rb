class ObjectTypes::Item < Types::BaseObject
  graphql_name "Item"

  field :id, ID, null: false
  field :uuid, ID, null: false
  field :order_id, ID, null: false
  field :listing_id, ID, null: false
  field :listing, ObjectTypes::Listing, null: false
  field :price, Int, null: true
end
