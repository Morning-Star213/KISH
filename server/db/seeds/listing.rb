p '--- seed:listing'

brand = Brand.find_by(name: 'Offen')
seller = Seller.find_by(name: 'Kish')

ActiveRecord::Base.transaction do
  CSV.foreach('db/seeds/offen-listing.csv').with_index do |csv, i|
    next if i == 0

    name = csv[0].strip
    color = csv[1].strip
    price = csv[2].strip
    size_name = csv[3].strip

    product = brand.products.joins(:product_master, :color).find_by(product_master: { name: name }, color: { name: color })
    size = brand.sizes.find_by(name: size_name)

    listing = product.listings.find_or_create_by!(
      organization: brand.organization,
      seller: seller,
      brand: brand,
      status: :sales,
      price: price,
      size: size
    )
  end
end
