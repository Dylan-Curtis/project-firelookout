class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :not_found 
  rescue_from ActiveRecord::RecordInvalid, with: :not_valid
  before_action :authorized_user
  
  def current_user
    @user ||= User.find_by_id(session[:user_id]) if session[:user_id]
  end

  def authorized_user
    render json: {error: "Unathorized"}, status: :unauthorized unless current_user
  end

  private
  def not_found exception
      render json: {error: "#{exception.model} not found"}, status: :not_found 
  end

  def not_valid invalid
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end
end
