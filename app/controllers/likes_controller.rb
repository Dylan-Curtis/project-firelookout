class LikesController < ApplicationController
  before_action :find_user, only: [:toggle_like, :liked_trails]
  
    def toggle_like
      liked = params[:liked] == 'true'
  
      if !liked
        @user.liked_trails << @trail
      else
        @user.liked_trails.delete(@trail)
      end
  
      render json: { message: 'Like/unlike successful' }
    end

    def liked_trails
      liked_trails = @user.liked_trails
      render json: liked_trails
    end

    private

def find_user
  @user = User.find(params[:user_id]) # Make sure to adjust this based on your route and parameter naming
end

def find_trail
  @trail = Trail.find(params[:trail_id]) # Make sure to adjust this based on your route and parameter naming
end


end