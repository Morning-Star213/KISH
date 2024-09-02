# == Schema Information
#
# Table name: brands
#
#  id                :bigint           not null, primary key
#  image(ロゴ)       :string
#  name(ブランド名)  :string           not null
#  uuid              :uuid             not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  organization_id   :bigint           not null
#
# Indexes
#
#  index_brands_on_organization_id  (organization_id)
#  index_brands_on_uuid             (uuid)
#
# Foreign Keys
#
#  fk_rails_...  (organization_id => organizations.id)
#
class Brand < ApplicationRecord
  belongs_to :organization
  has_many :product_masters, dependent: :destroy
  has_many :products, dependent: :destroy
  has_many :listings, dependent: :destroy
  has_many :categories, dependent: :destroy
  has_many :conditions, dependent: :destroy
  has_many :colors, dependent: :destroy
  has_many :sizes, dependent: :destroy
  has_many :orders, dependent: :destroy

  mount_uploader :image, ImageUploader
end
