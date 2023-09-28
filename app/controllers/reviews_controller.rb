class ReviewsController < ApplicationController
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
    
  private 
  def review_params
    params.permit(:body, :condition, :rating, :trail_id, :user_id) 
  end
end
