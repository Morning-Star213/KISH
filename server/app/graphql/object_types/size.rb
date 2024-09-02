class ObjectTypes::Size < Types::BaseObject
  graphql_name "Size"

  field :id, ID, null: false
  field :name, String, null: false
end
