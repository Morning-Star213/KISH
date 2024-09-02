# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World"
    end
    # auth
    field :signin, mutation: Mutations::Auth::Signin
    field :signout, mutation: Mutations::Auth::Signout

    # product
    field :create_product, mutation: Mutations::Product::CreateProduct
    field :update_product, mutation: Mutations::Product::UpdateProduct
    field :update_product_master, mutation: Mutations::Product::UpdateProductMaster

    # listing
    field :create_listing, mutation: Mutations::Listing::CreateListing
    field :update_listing, mutation: Mutations::Listing::UpdateListing

    # image
    field :create_product_image, mutation: Mutations::Image::CreateProductImage
    field :update_product_image, mutation: Mutations::Image::UpdateProductImage
    field :create_listing_image, mutation: Mutations::Image::CreateListingImage
    field :update_listing_image, mutation: Mutations::Image::UpdateListingImage

    # condition
    field :create_condition, mutation: Mutations::Condition::CreateCondition
    field :update_condition, mutation: Mutations::Condition::UpdateCondition
  end
end
