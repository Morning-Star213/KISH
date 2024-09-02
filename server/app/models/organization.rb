# == Schema Information
#
# Table name: organizations
#
#  id           :bigint           not null, primary key
#  image(ロゴ)  :string
#  name(名称)   :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Organization < ApplicationRecord
  has_many :brands, dependent: :destroy
  has_many :users, dependent: :destroy
  has_many :organization_sellers, dependent: :destroy
  has_many :sellers, through: :organization_sellers

  mount_uploader :image, ImageUploader
end
