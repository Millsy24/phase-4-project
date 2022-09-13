class Owner < ApplicationRecord
    has_many :listings
    has_many :reviews, through: :listings
end
