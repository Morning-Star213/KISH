module Queries::Category
  class Categories < Queries::BaseQuery
    argument :brand_id, ID, required: true

    type [ObjectTypes::Category], null: false

    def resolve(brand_id:)
      brand = ::Brand.find(brand_id)
      brand.categories.order(:position)
    end
  end
end
