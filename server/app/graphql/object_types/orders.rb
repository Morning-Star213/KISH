class ObjectTypes::Orders < Types::BaseObject
  graphql_name "Orders"

  field :orders, [ObjectTypes::Order], null: false
  def orders
    object
  end

  field :pagination, ObjectTypes::Pagination, null: false
  def pagination
    object
  end
end
