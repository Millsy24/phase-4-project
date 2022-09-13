class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user, :rating, :content
  has_one :listing
end
