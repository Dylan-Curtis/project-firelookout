class Trail < ApplicationRecord
    validates :elevation_gain, :name, :length, :body, presence: true
    has_many :reviews , dependent: :destroy 
    has_many :likes, dependent: :destroy
    has_many :liking_users, through: :likes, source: :user, dependent: :destroy
end
