class ObjectTypes::Image < Types::BaseObject
  graphql_name "Image"

  field :id, ID, null: false
  field :resource_id, ID, null: true
  field :resource_type, String, null: true
  field :image, String, null: false
  field :image_url, String, null: false
end
