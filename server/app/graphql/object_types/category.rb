class ObjectTypes::Category < Types::BaseObject
  graphql_name "Category"

  field :id, ID, null: false
  field :name, String, null: false
end
