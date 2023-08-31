class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    # has_many :trail_reviews
    # validates :email, :name, :password, presence: true
    validates :email, uniqueness: true
end
