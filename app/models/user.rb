class User < ApplicationRecord
    has_secure_password
    has_many :reviews, dependent: :destroy
    has_many :likes, dependent: :destroy
    has_many :liked_trails, through: :likes, source: :trail, dependent: :destroy
    # has_many :trail_reviews
    # validates :email, :name, :password, presence: true
    validates :email, uniqueness: true
end
