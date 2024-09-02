module Queries::Listing
  class Listings < Queries::BaseQuery
    argument :brand_id, ID, required: true
    argument :page, Int, required: false, default_value: 1
    argument :per_page, Int, required: false, default_value: 50
    argument :search, InputTypes::ListingSearch, required: false

    type ObjectTypes::Listings, null: false

    def resolve(brand_id:, page:, per_page:, search: {})
      brand = ::Brand.find_by(uuid: brand_id)
      brand.listings.search(search).order(id: :desc).page(page).per(per_page)
    end
  end
end
