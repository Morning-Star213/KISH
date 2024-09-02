# == Schema Information
#
# Table name: organization_sellers
#
#  id              :bigint           not null, primary key
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  organization_id :bigint           not null
#  seller_id       :bigint           not null
#
# Indexes
#
#  index_organization_sellers_on_organization_id  (organization_id)
#  index_organization_sellers_on_seller_id        (seller_id)
#
# Foreign Keys
#
#  fk_rails_...  (organization_id => organizations.id)
#  fk_rails_...  (seller_id => sellers.id)
#
class OrganizationSeller < ApplicationRecord
  belongs_to :organization
  belongs_to :seller
end
