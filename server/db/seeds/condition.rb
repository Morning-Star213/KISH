p '--- seed:condition'

brand = Brand.find_by(name: 'Offen')
conditions = [
  { name: '新品に近い', trade_in_rate: 100, resale_rate: 100 },
  { name: '状態が良い', trade_in_rate: 80, resale_rate: 80 },
  { name: 'やや傷や汚れあり', trade_in_rate: 60, resale_rate: 60 },
  { name: '全体的に状態が悪い' , trade_in_rate: 40, resale_rate: 40 },
]
conditions.each do |condition_attribute|
  Condition.find_or_create_by!(
    brand: brand,
    name: condition_attribute[:name],
    trade_in_rate: condition_attribute[:trade_in_rate],
    resale_rate: condition_attribute[:resale_rate],
  )
end
