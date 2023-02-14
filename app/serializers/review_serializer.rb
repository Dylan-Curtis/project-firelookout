class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :condition, :rating, :photo
  has_one :trail
  has_one :user
end
