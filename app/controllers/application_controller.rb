class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :not_found 
  rescue_from ActiveRecord::RecordInvalid, with: :not_valid

  private
  def not_found exception
      render json: {error: "#{exception.model} not found"}
  end

  def not_valid invalid
    render json: {errors:["validation errors"]}
  end
end
