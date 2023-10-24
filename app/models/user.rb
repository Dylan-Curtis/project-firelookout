class User < ApplicationRecord
    has_secure_password
    has_many :reviews, dependent: :destroy
    has_many :likes, dependent: :destroy
    has_many :liked_trails, through: :likes, source: :trail, dependent: :destroy
    validates :email, uniqueness: true
end
