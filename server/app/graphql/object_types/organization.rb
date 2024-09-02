class ObjectTypes::Organization < Types::BaseObject
  graphql_name "Organization"

  field :id, ID, null: false
  field :name, String, null: false
  field :brands, [ObjectTypes::Brand], null: false
  field :sellers, [ObjectTypes::Seller], null: false
end
