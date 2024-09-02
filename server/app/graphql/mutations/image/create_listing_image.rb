class Mutations::Image::CreateListingImage < Mutations::BaseMutation
  null false

  argument :uuid, ID, required: true
  argument :file, Types::FileType, required: false

  field :listing, ObjectTypes::Listing, null: true
  field :error, String, null: true

  def resolve(uuid:, file:)
    listing = ::Listing.find_by(uuid:)
    listing.images.create!(image: file)

    { listing: listing.reload }
  rescue => e
    return GraphQL::ExecutionError.new(e.message)
  end
end
