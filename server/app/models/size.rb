# == Schema Information
#
# Table name: sizes
#
#  id           :bigint           not null, primary key
#  name(サイズ) :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  brand_id     :bigint           not null
#
# Indexes
#
#  index_sizes_on_brand_id  (brand_id)
#
# Foreign Keys
#
#  fk_rails_...  (brand_id => brands.id)
#
class Size < ApplicationRecord
  belongs_to :brand
  has_many :product_master_sizes, dependent: :destroy
  has_many :products, through: :product_master_sizes
end
