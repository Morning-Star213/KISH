class Mutations::Auth::Signin < Mutations::BaseMutation
  null false

  argument :email, String, required: true
  argument :password, String, required: true

  field :user, ObjectTypes::User, null: true
  field :error, String, null: true

  def resolve(email:, password:)
    user = User.find_by(email: email)

    if user.blank? || user.confirmed_at.blank?
      return { error: 'ログインに失敗しました' } 
    end

    if user.authenticate(password)
      context[:session][:user_id] = user.id
  
      { user: user }
    else
      { error: 'ログインに失敗しました。' }
    end
  rescue => e
    raise GraphQL::ExecutionError.new(e.message)
  end
end
