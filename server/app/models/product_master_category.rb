# == Schema Information
#
# Table name: product_master_categories
#
#  id                :bigint           not null, primary key
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  category_id       :bigint           not null
#  product_master_id :bigint           not null
#
# Indexes
#
#  index_product_master_categories_on_category_id        (category_id)
#  index_product_master_categories_on_product_master_id  (product_master_id)
#
# Foreign Keys
#
#  fk_rails_...  (category_id => categories.id)
#  fk_rails_...  (product_master_id => product_masters.id)
#
class ProductMasterCategory < ApplicationRecord
  belongs_to :product_master
  belongs_to :category
end
