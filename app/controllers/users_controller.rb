class UsersController < ApplicationController
    # before_action :find_user, only: [:login]
    skip_before_action :authorized_user, only: [:create]

    def create
       user = User.create!(user_params)
       session[:user_id] = user.id
       render json: user, status: :created
    end      

    def destroy
        @user.delete() 
        head :no_content, status: 204
    end

    def update
        @user.update(user_params)
        render json: @user, status: :ok
    end
    
    def show       
        render json: @user, status: :ok
    end    
   
        private 
    def user_params
        params.permit(:password, :name, :email)
    end

    def find_user
        @user = User.find(params[:id])
    end
end
