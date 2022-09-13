class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :dob, :email, :password, :phone
end
