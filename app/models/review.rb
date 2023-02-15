class Review < ApplicationRecord
  belongs_to :trail, dependent: :destroy
  belongs_to :user, dependent: :destroy
end
