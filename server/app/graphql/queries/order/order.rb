module Queries::Order
  class Order < Queries::BaseQuery
    argument :uuid, ID, required: true

    type ObjectTypes::Order, null: false

    def resolve(uuid:)
      ::Order.find_by(uuid: uuid)
    end
  end
end
