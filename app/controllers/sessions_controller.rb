class SessionsController < ApplicationController
skip_before_action :authorized_user, only: [:login]
    def login
        user = User.find_by_email(params[:email])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: {error: "invalid credentials"}, status: :unauthorized
    end 
end   
    
    def logout
        sessions.delete :user_id
        head :no_content
    end
end

