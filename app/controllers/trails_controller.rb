class TrailsController < ApplicationController
    def index
        trails = Trail.all
        render json: trails
    end

    def show
        trail = Trail.find(params[:id])
        render json: trail
    end

    def create 
        trail = Trail.create!(trail_params)
         render json:  trail, status: :created
     end 
     
     private 
     def trail_params
         params.permit(:name, :elevation_gain, :length, :body, :location, :image, :map )
     end
end
