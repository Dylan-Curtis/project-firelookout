class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :member_since, :blurb, :profile_icon
end
