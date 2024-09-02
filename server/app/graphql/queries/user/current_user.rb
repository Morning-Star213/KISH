module Queries::User
  class CurrentUser < Queries::BaseQuery
    type ObjectTypes::User, null: true

    def resolve
      context[:current_user]
    end
  end
end