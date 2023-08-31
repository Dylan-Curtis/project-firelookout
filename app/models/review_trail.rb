class ReviewTrail < ApplicationRecord
  belongs_to :review
  belongs_to :trail
end
