p '--- seed:brand'

organization1 = Organization.find_by(name: 'Offen')
organization2 = Organization.find_by(name: 'Goldwin')

organization1.brands.find_or_create_by!(name: 'Offen')
organization2.brands.find_or_create_by!(name: 'Goldwin')
organization2.brands.find_or_create_by!(name: 'TheNorthFace')
