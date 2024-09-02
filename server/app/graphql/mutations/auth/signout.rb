class Mutations::Auth::Signout < Mutations::BaseMutation
  null false

  field :result, String, null: true

  def resolve
    context[:session]&.destroy

    { result: 'success' }
  rescue => e
    raise GraphQL::ExecutionError.new(e.message)
  end
end