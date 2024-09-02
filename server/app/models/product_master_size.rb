# == Schema Information
#
# Table name: product_master_sizes
#
#  id                :bigint           not null, primary key
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  product_master_id :bigint           not null
#  size_id           :bigint           not null
#
# Indexes
#
#  index_product_master_sizes_on_product_master_id  (product_master_id)
#  index_product_master_sizes_on_size_id            (size_id)
#
# Foreign Keys
#
#  fk_rails_...  (product_master_id => product_masters.id)
#  fk_rails_...  (size_id => sizes.id)
#
class ProductMasterSize < ApplicationRecord
  belongs_to :product_master
  belongs_to :size
end
