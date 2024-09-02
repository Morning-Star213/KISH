class ObjectTypes::Brand < Types::BaseObject
  graphql_name "Brand"

  field :id, ID, null: false
  field :name, String, null: false
  field :image, String, null: true
  field :image_url, String, null: true
end
