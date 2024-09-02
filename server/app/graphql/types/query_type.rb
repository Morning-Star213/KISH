# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :node, Types::NodeType, null: true, description: "Fetches an object given its ID." do
      argument :id, ID, required: true, description: "ID of the object."
    end

    def node(id:)
      context.schema.object_from_id(id, context)
    end

    field :nodes, [Types::NodeType, null: true], null: true, description: "Fetches a list of objects given a list of IDs." do
      argument :ids, [ID], required: true, description: "IDs of the objects."
    end

    def nodes(ids:)
      ids.map { |id| context.schema.object_from_id(id, context) }
    end

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World!"
    end

    # user
    field :current_user, resolver: ::Queries::User::CurrentUser 
    field :user, resolver: ::Queries::User::User

    # brand
    field :conditions, resolver: ::Queries::Condition::Conditions
    field :condition, resolver: ::Queries::Condition::Condition

    # product
    field :products, resolver: ::Queries::Product::Products
    field :product, resolver: ::Queries::Product::Product
    field :product_master, resolver: ::Queries::Product::ProductMaster

    # listing
    field :listings, resolver: ::Queries::Listing::Listings
    field :listing, resolver: ::Queries::Listing::Listing

    # orders
    field :orders, resolver: ::Queries::Order::Orders
    field :order, resolver: ::Queries::Order::Order

    field :categories, resolver: ::Queries::Category::Categories
    field :colors, resolver: ::Queries::Color::Colors
    field :sizes, resolver: ::Queries::Size::Sizes
  end
end
