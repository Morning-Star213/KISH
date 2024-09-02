module Queries::Product
  class ProductMaster < Queries::BaseQuery
    argument :brand_id, ID, required: true
    argument :code, String, required: true

    type ObjectTypes::ProductMaster, null: false

    def resolve(brand_id:, code:)
      brand = ::Brand.find(brand_id)
      brand.product_masters.find_by(code: code)
    end
  end
end
