p '--- seed:order'

brand = Brand.find_by(name: 'Offen')
listing = brand.listings.first

orders = [
  { status: :cart },
  { status: :address },
  { status: :delivery },
  { status: :payment },
  { status: :confirm },
  { status: :ordered },
  { status: :canceled },
]

ActiveRecord::Base.transaction do
  orders.each do |order_attributes|
    order = Order.create!(
      brand: brand,
      status: order_attributes[:status],
    )

    if order.status_ordered?
      order.order!
    end

    order.items.create!(
      listing: listing,
      price: 1500
    )

    order.update_price
  end
end
