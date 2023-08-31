class Review < ApplicationRecord
  has_many :review_trails
  # has_many :trails, through: :review_trails
  belongs_to :trail
  belongs_to :user, dependent: :destroy
  validates :rating, presence: true
  validates :user_id, uniqueness: { scope: :trail_id, message: "you have already left a review for this trail." }
end
