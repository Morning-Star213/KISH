require 'open-uri'

p '--- seed:product'

brand = Brand.find_by(name: 'Offen')

def download_image(url)
  extension = File.extname(URI.parse(url).path)
  file = Tempfile.new(['downloaded_image', extension], binmode: true)
  file.write(URI.open(url).read)
  file.rewind
  file
end

ActiveRecord::Base.transaction do
  CSV.foreach('db/seeds/offen.20240527.csv').with_index do |csv, i|
    next if i == 0

    # 商品名
    name = csv[1].strip
    color_name = csv[2]&.strip
    price = csv[3].strip
    size_names = csv[4].strip
    image_urls = csv[5].strip

    next if name.blank? || color_name.blank? || price.blank? || size_names.blank?

    product_master = brand.product_masters.find_by(name:)
    unless product_master
      product_master = brand.product_masters.create!(
        organization: brand.organization,
        name: name,
      )
    end

    # update
    product_master.update!(
      price: price,
      price_total: price
    )

    # size
    size_names.split(',').each do |size_name|
      size_value = size_name.sub('在庫なし:', '')
      size = brand.sizes.find_by(name: size_value)
      unless size
        size = brand.sizes.create!(name: size_name)
      end

      unless product_master.sizes.include?(size)
        product_master.sizes << size
      end
    end 

    # color
    color = brand.colors.find_by(name: color_name)
    unless color
      color = brand.colors.create!(name: color_name)
    end

    product = product_master.products.find_or_create_by!(
      organization: brand.organization,
      color: color,
      brand: brand
    )

    # image
    image_urls.split(',').each do |image_url|
      downloaded_image = download_image(image_url)

      product.images.create!(image: downloaded_image)

      downloaded_image.close
      downloaded_image.unlink
    end
  end
end
