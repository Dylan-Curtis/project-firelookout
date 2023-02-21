class ReviewsController < ApplicationCont
    def create 
       review = Review.create!(review_params)
        render json:  review, status: :created
    end 
    
    private 
    def review_params
        params.permit(:body, :condition, :rating)
    end
end
