module Queries::Color
  class Colors < Queries::BaseQuery
    argument :brand_id, ID, required: true

    type [ObjectTypes::Color], null: false

    def resolve(brand_id:)
      brand = ::Brand.find(brand_id)
      brand.colors
    end
  end
end
