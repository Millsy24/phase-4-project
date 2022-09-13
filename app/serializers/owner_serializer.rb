class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :name, :dob, :email, :phone
end
