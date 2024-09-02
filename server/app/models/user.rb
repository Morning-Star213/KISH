# == Schema Information
#
# Table name: users
#
#  id                   :bigint           not null, primary key
#  confirmation_token   :string
#  confirmed_at         :datetime
#  email(email)         :string           not null
#  first_name(名)       :string
#  last_name(姓)        :string
#  password_digest      :string
#  role(権限)           :integer          default("general"), not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  organization_id      :bigint
#
# Indexes
#
#  index_users_on_email            (email) UNIQUE
#  index_users_on_organization_id  (organization_id)
#
# Foreign Keys
#
#  fk_rails_...  (organization_id => organizations.id)
#
class User < ApplicationRecord
  has_secure_password

  belongs_to :organization

  enum role: { general: 0, admin: 1, kish: 9 }, _prefix: true

  def full_name
    "#{self.last_name}#{self.first_name}"
  end
end
