module Queries::Size
  class Sizes < Queries::BaseQuery
    argument :brand_id, ID, required: true

    type [ObjectTypes::Size], null: false

    def resolve(brand_id:)
      brand = ::Brand.find(brand_id)
      brand.sizes
    end
  end
end
