class Mutations::Condition::CreateCondition < Mutations::BaseMutation
  null false

  argument :attributes, InputTypes::Condition, required: true

  field :condition, ObjectTypes::Condition, null: true
  field :error, String, null: true

  def resolve(attributes:)
    current_store = context[:current_store]
    condition = current_store.conditions.create!(attributes.to_h)

    { condition: condition.reload }
  rescue => e
    Rails.logger.error(e)
    return GraphQL::ExecutionError.new(e.message)
  end
end
