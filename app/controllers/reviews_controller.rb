class ReviewsController < ApplicationController
  before_action :find_user, only: [:destroy]

  def create
    review = Review.create(review_params)
    if review.persisted?
      render json: review, status: :created
    else
      render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
    end
  end  

  def index
    reviews = Review.where(user_id: params[:user_id])
    render json: reviews
  end

  def destroy        
    @user.reviews.destroy_all
    head :no_content, status: 204    
  end
    
  private 
  def review_params
    params.permit(:body, :condition, :rating, :date, :trail_id, :user_id) 
  end
end
