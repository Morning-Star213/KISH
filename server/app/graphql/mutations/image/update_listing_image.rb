class Mutations::Image::UpdateListingImage < Mutations::BaseMutation
  null false

  argument :id, ID, required: true
  argument :file, Types::FileType, required: false

  field :listing, ObjectTypes::Listing, null: true
  field :error, String, null: true

  def resolve(id:, file:)
    image = ::Image.find(id)
    image.update!(image: file)

    { listing: image.reload.resource }
  rescue => e
    return GraphQL::ExecutionError.new(e.message)
  end
end
