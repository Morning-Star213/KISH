module Queries::Condition
  class Condition < Queries::BaseQuery
    argument :uuid, ID, required: true

    type ObjectTypes::Condition, null: false

    def resolve(uuid:)
      ::Condition.find_by(uuid: uuid)
    end
  end
end
