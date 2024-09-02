p '--- seed:user'

offen = Organization.find_by(name: 'Offen')
goldwin = Organization.find_by(name: 'Goldwin')
ActiveRecord::Base.transaction do

  password = 'password'
  users = [
    { organization: offen, email: 'offen01@gmail.com', last_name: 'Offen1', first_name: '管理者' }, 
    { organization: offen, email: 'offen02@gmail.com', last_name: 'Offen2', first_name: '管理者' }, 
    { organization: goldwin, email: 'gold01@gmail.com', last_name: 'ゴールド1', first_name: '管理者' }, 
    { organization: goldwin, email: 'gold02@gmail.com', last_name: 'ゴールド2', first_name: '管理者' }, 
  ]

  users.each do |user_attribute|
    user = User.find_by(email: user_attribute[:email])
    organization = user_attribute[:organization]
    unless user
      user = User.create!(
        email: user_attribute[:email], last_name: user_attribute[:last_name], first_name: user_attribute[:first_name], password: password, password_confirmation: password, confirmed_at: Time.zone.now,
        organization: organization
      )
    end
  end
end
