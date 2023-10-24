class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :condition, :rating, :date
  has_one :trail
  has_one :user
end
