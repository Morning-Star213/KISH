class Mutations::Product::CreateProduct < Mutations::BaseMutation
  null false

  argument :product_master, InputTypes::ProductMaster, required: true
  argument :product, InputTypes::Product, required: true

  field :product, ObjectTypes::Product, null: true
  field :error, String, null: true

  def resolve(product_master:, product:)
    brand = ::Brand.find(product_master[:brand_id])
    created_product = nil
    pm = ::ProductMaster.find_by(brand_id: product_master[:brand_id], code: product_master[:code])

    ActiveRecord::Base.transaction do
      unless pm
        pm = ::ProductMaster.create!(product_master.to_h.merge(organization: brand.organization))
      end

      created_product = pm.products.create!(product.to_h.merge(organization: brand.organization))
    end

    { product: created_product.reload }
  rescue => e
    Rails.logger.error(e)
    return GraphQL::ExecutionError.new(e.message)
  end
end
