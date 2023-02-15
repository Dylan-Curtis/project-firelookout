class TrailsController < ApplicationController
    def index
        trails = Trail.all
        render json: trails
    end

    def show
        trail = Trail.find(params[:id])
        render json: trail
    end
end
