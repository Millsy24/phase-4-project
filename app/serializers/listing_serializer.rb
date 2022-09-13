class ListingSerializer < ActiveModel::Serializer
  attributes :id, :price, :street_address, :city, :state, :country, :image
  has_one :owner
end
