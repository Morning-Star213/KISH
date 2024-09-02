module Queries::Order
  class Orders < Queries::BaseQuery
    argument :brand_id, ID, required: true
    argument :page, Int, required: false, default_value: 1
    argument :per_page, Int, required: false, default_value: 50
    argument :search, InputTypes::OrderSearch, required: false

    type ObjectTypes::Orders, null: false

    def resolve(brand_id:, page:, per_page:, search: {})
      brand = ::Brand.find(brand_id)
      brand.orders.search(search).order(id: :desc).page(page).per(per_page)
    end
  end
end
