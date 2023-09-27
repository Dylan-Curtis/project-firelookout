class ReviewsController < ApplicationController

    def create 
        @user = User.find_by(id: params[:user][:id])
        trail = Trail.find_by(id: params[:trail][:id])

        if user.present? && trail.present?
            review = Review.create!(review_params.merge( user: @user, trail: trail))
            render json:  review, status: :created
          else
            render json: { errors: ["User or Trail not found"] }, status: :unprocessable_entity
          end  
        
    end 

    def index
      reviews = @User.first.reviews.all
      render json: user
    end
    
    private 
    def review_params
        params.permit(:body, :condition, :rating, trail: [:id], user: [:id])
    end
end
