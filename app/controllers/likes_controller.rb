class LikesController < ApplicationController
  before_action :find_user, only: [:toggle_like, :liked_trails]
  before_action :find_trail, only: [:toggle_like]

  def toggle_like
    like = @user.likes.find_by(trail_id: @trail.id)

    if like
      like.destroy
      render json: { message: 'Unlike successful' }
    else
      like = Like.create!(like_params)
      render json: like, status: :created
    end
  end

  def show
    trail_id = params[:trail_id]
    user_id = params[:user_id]
    
    like = Like.find_by(trail_id: trail_id, user_id: user_id)

    if like
      render json: { liked: true }
    else
      render json: { liked: false }
    end
  end

  def liked_trails
    liked_trails = @user.likes.map { |like| like.trail }
    render json: liked_trails
  end

  private

  def find_user
    @user = User.find(params[:user_id]) # Make sure to adjust this based on your route and parameter naming
  end

  def find_trail
    @trail = Trail.find(params[:trail_id]) # Make sure to adjust this based on your route and parameter naming
  end

  def like_params
    params.permit(:trail_id, :user_id)
  end
end
