class Mutations::Image::CreateProductImage < Mutations::BaseMutation
  null false

  argument :uuid, ID, required: true
  argument :file, Types::FileType, required: false

  field :product, ObjectTypes::Product, null: true
  field :error, String, null: true

  def resolve(uuid:, file:)
    product = ::Product.find_by(uuid:)
    product.images.create!(image: file)

    { product: product.reload }
  rescue => e
    return GraphQL::ExecutionError.new(e.message)
  end
end
