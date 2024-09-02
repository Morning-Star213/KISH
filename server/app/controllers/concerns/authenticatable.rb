module Authenticatable
  include ActiveSupport::Concern

  private

  def logged_in?
    !!current_user
  end

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def authenticate_user!
    unless current_user
      false
    end
  end

  def login user
    session[:user_id] = user.id
  end

  def logout
    session.delete :user_id
  end

  def current_organization
    @current_organization ||= @current_user.organization
  end
end
