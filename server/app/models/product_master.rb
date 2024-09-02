# == Schema Information
#
# Table name: product_masters
#
#  id                        :bigint           not null, primary key
#  care(ケア)                :text
#  code(品番)                :string
#  description(説明)         :text
#  name(名称)                :string           not null
#  price(金額（税抜）)       :integer
#  price_tax(税額)           :integer
#  price_total(金額（税込）) :integer
#  sex(性別)                 :integer
#  uuid                      :uuid             not null
#  year(年度)                :string
#  created_at                :datetime         not null
#  updated_at                :datetime         not null
#  brand_id                  :bigint           not null
#  organization_id           :bigint           not null
#
# Indexes
#
#  index_product_masters_on_brand_id         (brand_id)
#  index_product_masters_on_organization_id  (organization_id)
#  index_product_masters_on_uuid             (uuid)
#
# Foreign Keys
#
#  fk_rails_...  (brand_id => brands.id)
#  fk_rails_...  (organization_id => organizations.id)
#
class ProductMaster < ApplicationRecord
  belongs_to :organization
  belongs_to :brand
  has_many :products, dependent: :destroy
  has_many :product_master_sizes, dependent: :destroy
  has_many :sizes, through: :product_master_sizes
  has_many :product_master_categories, dependent: :destroy
  has_many :categories, through: :product_master_categories

  enum sex: { men: 0, women: 1 }, _prefix: true
end
