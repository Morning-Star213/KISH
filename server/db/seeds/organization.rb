p '--- seed:organization'

[
  { name: 'Offen' },
  { name: 'Goldwin' },
].each_with_index do |params, i|
  organization = Organization.find_or_create_by!(name: params[:name])
end
