# == Schema Information
#
# Table name: orders
#
#  id                              :bigint           not null, primary key
#  order_date(注文日時)            :datetime
#  order_number(注文ID)            :integer          not null
#  payment_status(支払ステータス)  :integer          default("unpaid"), not null
#  shipping_status(配送ステータス) :integer          default("not_shipped"), not null
#  status(ステータス)              :integer          default("cart"), not null
#  strage_location(保管場所)       :string
#  total_price(金額)               :integer
#  tracking_code(追跡番号)         :string
#  uuid                            :uuid             not null
#  created_at                      :datetime         not null
#  updated_at                      :datetime         not null
#  brand_id                        :bigint           not null
#
# Indexes
#
#  index_orders_on_brand_id  (brand_id)
#  index_orders_on_uuid      (uuid)
#
# Foreign Keys
#
#  fk_rails_...  (brand_id => brands.id)
#
class Order < ApplicationRecord
  belongs_to :brand
  belongs_to :user, optional: true
  has_many :items, dependent: :destroy

  enum status: { cart: 0, address: 1, delivery: 2, payment: 3, confirm: 4, ordered: 5, canceled: 9 }, _prefix: true
  enum payment_status: { unpaid: 0, paid: 1 }, _prefix: true
  enum shipping_status: { not_shipped: 0, shipped: 1 }, _prefix: true

  before_create :set_order_number

  class << self
    def search(params)
      orders = self
      orders
    end
  end

  def order!
    self.status_ordered!
    update!(order_date: Time.current)
  end

  def update_price
    set_total_price
    save!
  end

  def set_total_price
    self.total_price = items.sum(:price) 
  end

  def set_order_number
    self.order_number = brand.orders.maximum(:order_number).to_i + 1
  end
end
