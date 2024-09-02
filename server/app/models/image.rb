# == Schema Information
#
# Table name: images
#
#  id              :bigint           not null, primary key
#  description     :text
#  image(画像)     :string           not null
#  resource_type   :string           not null
#  title           :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  resource_id     :integer          not null
#
class Image < ApplicationRecord
  belongs_to :resource, polymorphic: true

  mount_uploader :image, ImageUploader
end
