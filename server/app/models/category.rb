# == Schema Information
#
# Table name: categories
#
#  id                   :bigint           not null, primary key
#  name(カテゴリー名称) :string           not null
#  position(position)   :integer          not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  brand_id             :bigint           not null
#
# Indexes
#
#  index_categories_on_brand_id  (brand_id)
#
# Foreign Keys
#
#  fk_rails_...  (brand_id => brands.id)
#
class Category < ApplicationRecord
  belongs_to :brand
  has_many :product_master_categories, dependent: :destroy
  has_many :product_masters, through: :product_master_categories

  # todo ブランドごとにカテゴリーを持つようにする
  acts_as_list scope: [:brand], top_of_list: 0
end
