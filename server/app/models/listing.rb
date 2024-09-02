# == Schema Information
#
# Table name: listings
#
#  id                      :bigint           not null, primary key
#  comment(コメント)       :text
#  price(金額)             :integer
#  repair_method(対応方針) :integer          default("cleaning")
#  status(ステータス)      :integer          default("ready"), not null
#  uuid                    :uuid             not null
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  brand_id                :bigint           not null
#  condition_id            :bigint
#  organization_id         :bigint           not null
#  product_id              :bigint           not null
#  seller_id               :bigint           not null
#  size_id                 :bigint
#
# Indexes
#
#  index_listings_on_brand_id         (brand_id)
#  index_listings_on_condition_id     (condition_id)
#  index_listings_on_organization_id  (organization_id)
#  index_listings_on_product_id       (product_id)
#  index_listings_on_seller_id        (seller_id)
#  index_listings_on_size_id          (size_id)
#  index_listings_on_uuid             (uuid)
#
# Foreign Keys
#
#  fk_rails_...  (brand_id => brands.id)
#  fk_rails_...  (condition_id => conditions.id)
#  fk_rails_...  (organization_id => organizations.id)
#  fk_rails_...  (product_id => products.id)
#  fk_rails_...  (seller_id => sellers.id)
#  fk_rails_...  (size_id => sizes.id)
#
class Listing < ApplicationRecord
  belongs_to :organization
  belongs_to :brand
  belongs_to :product
  belongs_to :seller
  belongs_to :condition, optional: true
  belongs_to :size, optional: true
  has_many :images, as: :resource, dependent: :destroy

  enum status: { ready: 0, pending: 1, sales: 2, waiting: 3, shipped: 4 }, _prefix: true
  enum repair_method: {
    cleaning: 0,           # 洗浄
    repair: 1,             # 補修
    cleaning_and_repair: 2,# 洗浄・補修
    no_action_required: 3, # 対応不要
    action_pending: 4,     # 対応保留
    remake: 5,             # リメイク
    recycle: 6,            # リサイクル
    discard: 7             # 廃棄
  }, _prefix: true

  after_create :update_product_sizes

  class << self
    def search(params)
      listings = self

      if params[:keyword].present?
        listings = listings.where(
          "product_masters.code ilike ? OR product_masters.name ilike ?",
          "%#{params[:keyword]}%",
          "%#{params[:keyword]}%"
        )
      end

      listings
    end
  end

  def set_default_assosiations
    unless self.organization
      self.organization = product.organization
    end

    unless self.brand 
      self.brand = product.brand
    end

    unless self.seller
      self.seller = organization.sellers.find_by(name: 'Kish')
    end
  end

  def update_product_sizes
    product.update_sizes
  end
end
