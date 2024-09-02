class ObjectTypes::Color < Types::BaseObject
  graphql_name "Color"

  field :id, ID, null: false
  field :name, String, null: false
end
