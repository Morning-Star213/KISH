class Mutations::Image::UpdateProductImage < Mutations::BaseMutation
  null false

  argument :id, ID, required: true
  argument :file, Types::FileType, required: false

  field :product, ObjectTypes::Product, null: true
  field :error, String, null: true

  def resolve(id:, file:)
    image = ::Image.find(id)
    image.update!(image: file)

    { product: image.reload.resource }
  rescue => e
    return GraphQL::ExecutionError.new(e.message)
  end
end
