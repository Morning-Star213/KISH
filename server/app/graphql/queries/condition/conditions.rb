module Queries::Condition
  class Conditions < Queries::BaseQuery
    argument :brand_id, ID, required: true

    type [ObjectTypes::Condition], null: false

    def resolve(brand_id:)
      brand = ::Brand.find(brand_id)
      brand.conditions.order(:position)
    end
  end
end
