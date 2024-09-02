# == Schema Information
#
# Table name: sellers
#
#  id           :bigint           not null, primary key
#  name(名称)   :string
#  uuid         :uuid             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
# Indexes
#
#  index_sellers_on_uuid  (uuid)
#
class Seller < ApplicationRecord
  has_many :organization_sellers, dependent: :destroy
end
