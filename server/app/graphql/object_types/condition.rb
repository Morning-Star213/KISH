class ObjectTypes::Condition < Types::BaseObject
  graphql_name "Condition"

  field :id, ID, null: false
  field :uuid, ID, null: false
  field :name, String, null: true
  field :comment, String, null: true
  field :trade_in_rate, Int, null: true
  field :resale_rate, Int, null: true
end
