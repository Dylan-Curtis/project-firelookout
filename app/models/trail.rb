class Trail < ApplicationRecord
    validates :name, uniqueness: true
    has_many :reviews
    
    # validates :elevation_gain, :name, :length, :body, :location, :image, :map presence: true
end
