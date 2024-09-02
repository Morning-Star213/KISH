module Queries::User
  class User < Queries::BaseQuery
    argument :id, ID, required: true

    type ObjectTypes::User, null: true

    def resolve(id:)
      ::User.find(id)
    end
  end
end
