class ObjectTypes::Listing < Types::BaseObject
  graphql_name "Listing"

  field :id, ID, null: false
  field :uuid, ID, null: false
  field :organization_id, ID, null: false
  field :brand_id, ID, null: false
  field :seller_id, ID, null: false
  field :product_id, ID, null: false
  field :condition_id, ID, null: true
  field :size_id, ID, null: true
  field :status, String, null: true
  field :status_i18n, String, null: true
  field :repair_method, String, null: true
  field :repair_method_i18n, String, null: true
  field :price, Int, null: true
  field :comment, String, null: true
  field :product, ObjectTypes::Product, null: false
  field :size, ObjectTypes::Size, null: true
  field :images, [ObjectTypes::Image], null: true
end
