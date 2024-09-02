# == Schema Information
#
# Table name: conditions
#
#  id                          :bigint           not null, primary key
#  name(状態名)                :string           not null
#  position(position)          :integer          not null
#  resale_rate(再販価格割合)   :integer
#  trade_in_rate(買取価格割合) :integer
#  uuid                        :uuid             not null
#  created_at                  :datetime         not null
#  updated_at                  :datetime         not null
#  brand_id                    :bigint           not null
#
# Indexes
#
#  index_conditions_on_brand_id  (brand_id)
#  index_conditions_on_uuid      (uuid)
#
# Foreign Keys
#
#  fk_rails_...  (brand_id => brands.id)
#
class Condition < ApplicationRecord
  belongs_to :brand
  has_many :listings

  acts_as_list scope: [:brand], top_of_list: 0
end
