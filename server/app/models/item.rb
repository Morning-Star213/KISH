# == Schema Information
#
# Table name: items
#
#  id           :bigint           not null, primary key
#  price(金額)  :integer
#  uuid         :uuid             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  listing_id   :bigint           not null
#  order_id     :bigint           not null
#
# Indexes
#
#  index_items_on_listing_id  (listing_id)
#  index_items_on_order_id    (order_id)
#  index_items_on_uuid        (uuid)
#
# Foreign Keys
#
#  fk_rails_...  (listing_id => listings.id)
#  fk_rails_...  (order_id => orders.id)
#
class Item < ApplicationRecord
  belongs_to :order
  belongs_to :listing
end
