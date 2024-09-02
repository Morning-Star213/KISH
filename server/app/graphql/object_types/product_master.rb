class ObjectTypes::ProductMaster < Types::BaseObject
  graphql_name "ProductMaster"

  field :id, ID, null: false
  field :brand_id, ID, null: false
  field :uuid, ID, null: false
  field :name, String, null: false
  field :code, String, null: true
  field :description, String, null: true
  field :price, Integer, null: true
  field :price_total, Integer, null: true
  field :care, String, null: true
  field :sex, String, null: true
  field :sex_i18n, String, null: true
  field :year, String, null: true
  field :sizes, [ObjectTypes::Size], null: true
  field :categories, [ObjectTypes::Category], null: true
end
