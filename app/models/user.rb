class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :likes
    has_many :liked_trails, through: :likes, source: :trail
    # has_many :trail_reviews
    # validates :email, :name, :password, presence: true
    validates :email, uniqueness: true
end
