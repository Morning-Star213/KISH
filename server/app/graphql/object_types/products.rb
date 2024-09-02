class ObjectTypes::Products < Types::BaseObject
  graphql_name "Products"

  field :products, [ObjectTypes::Product], null: false
  def products
    object
  end

  field :pagination, ObjectTypes::Pagination, null: false
  def pagination
    object
  end
end
