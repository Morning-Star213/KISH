class InputTypes::Condition < Types::BaseInputObject
  graphql_name "ConditionAttributes"

  argument :name, String, required: false
  argument :trade_in_rate, Int, required: false
  argument :resale_rate, Int, required: false
end
