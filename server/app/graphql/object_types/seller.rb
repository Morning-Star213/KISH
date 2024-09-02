class ObjectTypes::Seller < Types::BaseObject
  graphql_name "Seller"

  field :id, ID, null: false
  field :uuid, ID, null: false
  field :name, String, null: false
end
