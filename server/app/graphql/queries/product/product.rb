module Queries::Product
  class Product < Queries::BaseQuery
    argument :uuid, ID, required: true

    type ObjectTypes::Product, null: false

    def resolve(uuid:)
      ::Product.find_by(uuid: uuid)
    end
  end
end
