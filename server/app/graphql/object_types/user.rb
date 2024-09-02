class ObjectTypes::User < Types::BaseObject
  graphql_name "User"

  field :id, ID, null: false
  field :email, String, null: false
  field :role, String, null: false
  field :role_i18n, String, null: true
  field :first_name, String, null: true
  field :last_name, String, null: true
  field :confirmation_token, String, null: true
  field :full_name, String, null: true
  field :organization_id, ID, null: true
  field :organization, ObjectTypes::Organization, null: true
end
