class Trail < ApplicationRecord
    validates :elevation_gain, :name, :length, :body, :location, presence: true
    has_many :reviews     
    has_many :likes
    has_many :liking_users, through: :likes, source: :user
end
