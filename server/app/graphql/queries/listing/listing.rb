module Queries::Listing
  class Listing < Queries::BaseQuery
    argument :uuid, ID, required: true

    type ObjectTypes::Listing, null: false

    def resolve(uuid:)
      ::Listing.find_by(uuid: uuid)
    end
  end
end
