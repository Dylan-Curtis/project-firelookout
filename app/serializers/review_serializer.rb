class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :condition, :rating
  has_one :trail
  has_one :user
end
