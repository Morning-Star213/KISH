class Mutations::Listing::UpdateListing < Mutations::BaseMutation
  null false

  argument :uuid, ID, required: true
  argument :attributes, InputTypes::Listing, required: true

  field :listing, ObjectTypes::Listing, null: true
  field :error, String, null: true

  def resolve(uuid:, attributes:)
    listing = ::Listing.find_by!(uuid: uuid)
    listing.update!(attributes.to_h)

    { listing: listing.reload }
  rescue => e
    Rails.logger.error(e)
    return GraphQL::ExecutionError.new(e.message)
  end
end
