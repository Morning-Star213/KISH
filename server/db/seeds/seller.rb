p '--- seed:seller'

seller1 = Seller.find_or_create_by!(name: 'Kish')
seller2 = Seller.find_or_create_by!(name: 'Offen')
seller3 = Seller.find_or_create_by!(name: 'Goldwin')

offen = Organization.find_by(name: 'Offen')
goldwin = Organization.find_by(name: 'Goldwin')

offen.sellers << seller1 unless offen.sellers.include?(seller1)
offen.sellers << seller2 unless offen.sellers.include?(seller2)

goldwin.sellers << seller1 unless goldwin.sellers.include?(seller1)
goldwin.sellers << seller3 unless goldwin.sellers.include?(seller3)
