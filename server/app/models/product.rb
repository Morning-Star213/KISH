# == Schema Information
#
# Table name: products
#
#  id                      :bigint           not null, primary key
#  is_archive(アーカイブ)  :boolean          default(FALSE), not null
#  is_resale(リセール対象) :boolean          default(FALSE), not null
#  price                   :integer
#  status(ステータス)      :integer          default("draft"), not null
#  uuid                    :uuid             not null
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  brand_id                :bigint           not null
#  color_id                :bigint
#  organization_id         :bigint           not null
#  product_master_id       :bigint           not null
#
# Indexes
#
#  index_products_on_brand_id           (brand_id)
#  index_products_on_color_id           (color_id)
#  index_products_on_organization_id    (organization_id)
#  index_products_on_product_master_id  (product_master_id)
#  index_products_on_uuid               (uuid)
#
# Foreign Keys
#
#  fk_rails_...  (brand_id => brands.id)
#  fk_rails_...  (color_id => colors.id)
#  fk_rails_...  (organization_id => organizations.id)
#  fk_rails_...  (product_master_id => product_masters.id)
#
class Product < ApplicationRecord
  belongs_to :organization
  belongs_to :brand
  belongs_to :product_master
  belongs_to :color, optional: true
  has_many :images, as: :resource, dependent: :destroy
  has_many :listings, dependent: :destroy
  has_many :product_sizes, dependent: :destroy
  has_many :sizes, through: :product_sizes

  enum status: { draft: 0, publish: 1 }, _prefix: true

  class << self
    def search(params)
      products = self
      products = products.eager_load(:color, product_master: [:categories, :sizes])

      if params[:keyword].present?
        products = products.where(
          "product_masters.code ilike ? OR product_masters.name ilike ?",
          "%#{params[:keyword]}%",
          "%#{params[:keyword]}%"
        )
      end

      if params[:is_resale].present?
        products = products.where(is_resale: params[:is_resale])
      end

      if params[:is_archive].present?
        products = products.where(is_archive: params[:is_archive])
      end

      products
    end
  end

  def update_sizes
    self.size_ids = listings.map(&:size).uniq.map(&:id)
  end
end
