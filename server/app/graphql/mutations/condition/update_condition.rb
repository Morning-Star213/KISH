class Mutations::Condition::UpdateCondition < Mutations::BaseMutation
  null false

  argument :uuid, ID, required: true
  argument :attributes, InputTypes::Condition, required: true

  field :condition, ObjectTypes::Condition, null: true
  field :error, String, null: true

  def resolve(uuid:, attributes:)
    condition = ::Condition.find_by!(uuid: uuid)
    condition.update!(attributes.to_h)

    { condition: condition.reload }
  rescue => e
    Rails.logger.error(e)
    return GraphQL::ExecutionError.new(e.message)
  end
end
