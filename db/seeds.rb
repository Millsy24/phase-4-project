Owner.destroy_all
User.destroy_all
Listing.destroy_all

Owner.reset_pk_sequence
User.reset_pk_sequence
Listing.reset_pk_sequence



21.times do 
    Owner.create(
        name: Faker::Name.unique.name, dob: Faker::Date.birthday(min_age: 18, max_age: 65), email: Faker::Internet.email , phone: Faker::PhoneNumber.cell_phone
    )
end

30.times do 
    User.create(
        name: Faker::Name.unique.name , dob: Faker::Date.birthday(min_age: 18, max_age: 65) , email: Faker::Internet.email , password: "password", phone: Faker::PhoneNumber.cell_phone
    )
end
        
l1 = Listing.create(owner_id: Owner.ids.sample, price: rand(70..400), street_address: Faker::Address.street_address, city: Faker::Address.city , state: Faker::Address.state , country: "United States" , image:'https://a0.muscache.com/im/pictures/8efc7ea1-fb32-4101-a548-0ae918c6c979.jpg?im_w=720')
l2 = Listing.create(owner_id: Owner.ids.sample, price: rand(70..400), street_address: Faker::Address.street_address, city: Faker::Address.city , state: Faker::Address.state , country: "United States" , image:'https://a0.muscache.com/im/pictures/miso/Hosting-53446271/original/b55da598-a264-4fda-a6f8-2672856452d0.jpeg?im_w=720')
l3 = Listing.create(owner_id: Owner.ids.sample, price: rand(70..400), street_address: Faker::Address.street_address, city: Faker::Address.city , state: Faker::Address.state , country: "United States" , image:'https://a0.muscache.com/im/pictures/miso/Hosting-52854046/original/30c02e83-4e1f-4e91-8cfa-f988eb9ec1d0.jpeg?im_w=720')
l4 = Listing.create(owner_id: Owner.ids.sample, price: rand(70..400), street_address: Faker::Address.street_address, city: Faker::Address.city , state: Faker::Address.state , country: "United States" , image:'https://a0.muscache.com/im/pictures/prohost-api/Hosting-636184004787424077/original/6a49819c-0303-4b0c-be9e-77a2b6ac34fa.jpeg?im_w=720')
l5 = Listing.create(owner_id: Owner.ids.sample, price: rand(70..400), street_address: Faker::Address.street_address, city: Faker::Address.city , state: Faker::Address.state , country: "United States" , image:'https://a0.muscache.com/im/pictures/bdedfebb-ca80-49a2-9f89-8b477a8e1762.jpg?im_w=720')
l6 = Listing.create(owner_id: Owner.ids.sample, price: rand(70..400), street_address: Faker::Address.street_address, city: Faker::Address.city , state: Faker::Address.state , country: "United States" , image:'https://a0.muscache.com/im/pictures/8efc7ea1-fb32-4101-a548-0ae918c6c979.jpg?im_w=720')
l7 = Listing.create(owner_id: Owner.ids.sample, price: rand(70..400), street_address: Faker::Address.street_address, city: Faker::Address.city , state: Faker::Address.state , country: "United States" , image:'https://a0.muscache.com/im/pictures/miso/Hosting-53446271/original/b55da598-a264-4fda-a6f8-2672856452d0.jpeg?im_w=720')
l8 = Listing.create(owner_id: Owner.ids.sample, price: rand(70..400), street_address: Faker::Address.street_address, city: Faker::Address.city , state: Faker::Address.state , country: "United States" , image:'https://a0.muscache.com/im/pictures/miso/Hosting-52854046/original/30c02e83-4e1f-4e91-8cfa-f988eb9ec1d0.jpeg?im_w=720')
l9 = Listing.create(owner_id: Owner.ids.sample, price: rand(70..400), street_address: Faker::Address.street_address, city: Faker::Address.city , state: Faker::Address.state , country: "United States" , image:'https://a0.muscache.com/im/pictures/prohost-api/Hosting-636184004787424077/original/6a49819c-0303-4b0c-be9e-77a2b6ac34fa.jpeg?im_w=720')
l10 = Listing.create(owner_id: Owner.ids.sample, price: rand(70..400), street_address: Faker::Address.street_address, city: Faker::Address.city , state: Faker::Address.state , country: "United States" , image:'https://a0.muscache.com/im/pictures/bdedfebb-ca80-49a2-9f89-8b477a8e1762.jpg?im_w=720')



r1= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "All around great stay in the lake!")
r2= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "Wonderful view of the lake, all the multiple levels of decks made for a incredible experience. Great spot for our boat and to enjoy the water.")
r3= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "This place was great! Truly a home away from home. Everything we could have needed was there! Our kids (ranging in age from 3 up to 9) had a blast at the lake and on the dock. ")
r4= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "Very nice accomodations! The stairs were steep but my girls loved them!")
r5= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "This is great")


