# == Schema Information
#
# Table name: colors
#
#  id           :bigint           not null, primary key
#  name(色)     :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  brand_id     :bigint           not null
#
# Indexes
#
#  index_colors_on_brand_id  (brand_id)
#
# Foreign Keys
#
#  fk_rails_...  (brand_id => brands.id)
#
class Color < ApplicationRecord
  belongs_to :brand
  has_many :products
end
