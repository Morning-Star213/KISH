module Queries::Product
  class Products < Queries::BaseQuery
    argument :brand_id, ID, required: true
    argument :page, Int, required: false, default_value: 1
    argument :per_page, Int, required: false, default_value: 50
    argument :search, InputTypes::ProductSearch, required: false

    type ObjectTypes::Products, null: false

    def resolve(brand_id:, page:, per_page:, search: {})
      brand = ::Brand.find_by(uuid: brand_id)
      brand.products.search(search).order(id: :desc).page(page).per(per_page)
    end
  end
end
