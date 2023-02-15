class UsersController < ApplicationController
    def create
       users = User.create!(user_params)
        render json:users, status: :created
    end        
   
        private 
    def user_params
        params.permit(:password, :condition, :rating, :photo)
    end
end
