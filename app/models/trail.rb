class Trail < ApplicationRecord
    validates :elevation_gain, :name, :length, :body, :location, :map presence: true
    has_many :review_trails
    has_many :reviews, through: :review_trails   
    
    
end
