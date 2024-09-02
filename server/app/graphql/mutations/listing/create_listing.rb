class Mutations::Listing::CreateListing < Mutations::BaseMutation
  null false

  argument :uuid, ID, required: true

  field :listing, ObjectTypes::Listing, null: true
  field :error, String, null: true

  def resolve(uuid:)
    product = ::Product.find_by(uuid: uuid)
    listing = product.listings.build
    listing.set_default_assosiations
    listing.save!

    { listing: listing.reload }
  rescue => e
    Rails.logger.error(e)
    return GraphQL::ExecutionError.new(e.message)
  end
end
