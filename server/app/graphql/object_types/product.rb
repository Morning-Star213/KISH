class ObjectTypes::Product < Types::BaseObject
  graphql_name "Product"

  field :id, ID, null: false
  field :product_master_id, ID, null: true
  field :product_master, ObjectTypes::ProductMaster, null: false
  field :color_id, ID, null: true
  field :color, ObjectTypes::Color, null: true
  field :uuid, ID, null: false
  field :status, String, null: false
  field :is_resale, Boolean, null: false
  field :is_archive, Boolean, null: false
  field :images, [ObjectTypes::Image], null: true
  field :sizes, [ObjectTypes::Size], null: true
end
