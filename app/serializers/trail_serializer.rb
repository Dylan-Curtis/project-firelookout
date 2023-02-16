class TrailSerializer < ActiveModel::Serializer
  attributes :id, :name, :elevation_gain, :length, :image, :map
end
