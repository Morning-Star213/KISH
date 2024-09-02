class Mutations::Product::UpdateProductMaster < Mutations::BaseMutation
  null false

  argument :uuid, ID, required: true
  argument :attributes, InputTypes::ProductMaster, required: true

  field :product_master, ObjectTypes::ProductMaster, null: false
  field :error, String, null: true

  def resolve(uuid:, attributes:)
    product_master = ::ProductMaster.find_by!(uuid: uuid)
    product_master.update!(attributes.to_h)

    { product_master: product_master.reload }
  rescue => e
    Rails.logger.error(e)
    return GraphQL::ExecutionError.new(e.message)
  end
end
