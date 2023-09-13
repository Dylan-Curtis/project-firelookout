class Trail < ApplicationRecord
    validates :elevation_gain, :name, :length, :body, :location, presence: true
    has_many :reviews     
end
