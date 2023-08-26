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

def create

    user = User.find_or_create_by(email: params[:email]) do |u|
        u.name = params[:name] 
        u.email = params[:email] 
        u.password = SecureRandom.hex(16)
                  
      end
      if user.id
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: {message: user.errors.full_messages}, status: :unprocessable_entity
      end
    end
    
    def logout
        session.delete :user_id
        head :no_content
    end
end

 