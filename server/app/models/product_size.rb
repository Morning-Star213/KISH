# == Schema Information
#
# Table name: product_sizes
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  product_id :bigint           not null
#  size_id    :bigint           not null
#
# Indexes
#
#  index_product_sizes_on_product_id  (product_id)
#  index_product_sizes_on_size_id     (size_id)
#
# Foreign Keys
#
#  fk_rails_...  (product_id => products.id)
#  fk_rails_...  (size_id => sizes.id)
#
class ProductSize < ApplicationRecord
  belongs_to :product
  belongs_to :size
end
