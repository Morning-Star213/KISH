class ObjectTypes::Order < Types::BaseObject
  graphql_name "Order"

  field :id, ID, null: false
  field :uuid, ID, null: false
  field :brand_id, ID, null: false
  field :order_number, Int, null: true
  field :status, String, null: true
  field :status_i18n, String, null: true
  field :shipping_status, String, null: true
  field :shipping_status_i18n, String, null: true
  field :payment_status, String, null: true
  field :payment_status_i18n, String, null: true
  field :total_price, Int, null: true
  field :order_date, Types::DateTimeType, null: true
  field :tracking_code, String, null: true
  field :strage_location, String, null: true
  field :items, [ObjectTypes::Item], null: true
end
