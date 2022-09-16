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
l6 = Listing.create(owner_id: Owner.ids.sample, price: rand(70..400), street_address: Faker::Address.street_address, city: Faker::Address.city , state: Faker::Address.state , country: "United States" , image:'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg')
l7 = Listing.create(owner_id: Owner.ids.sample, price: rand(70..400), street_address: Faker::Address.street_address, city: Faker::Address.city , state: Faker::Address.state , country: "United States" , image:'https://assets-news.housing.com/news/wp-content/uploads/2022/04/07013406/ELEVATED-HOUSE-DESIGN-FEATURE-compressed.jpg')
l8 = Listing.create(owner_id: Owner.ids.sample, price: rand(70..400), street_address: Faker::Address.street_address, city: Faker::Address.city , state: Faker::Address.state , country: "United States" , image:'https://s3.amazonaws.com/timeinc-houseplans-v2-production/region/images/539/original/Adaptive_Cottage_front_resize.jpg?1657733110')
l9 = Listing.create(owner_id: Owner.ids.sample, price: rand(70..400), street_address: Faker::Address.street_address, city: Faker::Address.city , state: Faker::Address.state , country: "United States" , image:'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8&w=1000&q=80')
l10 = Listing.create(owner_id: Owner.ids.sample, price: rand(70..400), street_address: Faker::Address.street_address, city: Faker::Address.city , state: Faker::Address.state , country: "United States" , image:'https://media.istockphoto.com/photos/beautiful-residential-home-exterior-on-bright-sunny-day-with-green-picture-id1211174464?k=20&m=1211174464&s=612x612&w=0&h=fQ3ahmaJnYcZb0UQtBXvOhcuhHFTgK9BA5Mylic7Gnw=')
l11 = Listing.create(owner_id: Owner.ids.sample, price: rand(70..400), street_address: Faker::Address.street_address, city: Faker::Address.city , state: Faker::Address.state , country: "United States" , image:'https://images.familyhomeplans.com/cdn-cgi/image/fit=scale-down,quality=85/plans/41438/41438-b580.jpg')
l12 = Listing.create(owner_id: Owner.ids.sample, price: rand(70..400), street_address: Faker::Address.street_address, city: Faker::Address.city , state: Faker::Address.state , country: "United States" , image:'https://images.familyhomeplans.com/cdn-cgi/image/fit=scale-down,quality=85/plans/44207/44207-b580.jpg')
l13 = Listing.create(owner_id: Owner.ids.sample, price: rand(70..400), street_address: Faker::Address.street_address, city: Faker::Address.city , state: Faker::Address.state , country: "United States" , image:'https://cdn.houseplansservices.com/product/e76k8mqt1dc3a5el8dvaje0r56/w620x413.jpg?v=8')
l14 = Listing.create(owner_id: Owner.ids.sample, price: rand(70..400), street_address: Faker::Address.street_address, city: Faker::Address.city , state: Faker::Address.state , country: "United States" , image:'https://media.houseandgarden.co.uk/photos/62fa498b36fcbc4f6a417049/16:9/w_1600%2Cc_limit/Shot-19_452_RT%2520(1).jpg')
l15 = Listing.create(owner_id: Owner.ids.sample, price: rand(70..400), street_address: Faker::Address.street_address, city: Faker::Address.city , state: Faker::Address.state , country: "United States" , image:'https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/wp-content/uploads/2021/08/download-7.jpg')
l16 = Listing.create(owner_id: Owner.ids.sample, price: rand(70..400), street_address: Faker::Address.street_address, city: Faker::Address.city , state: Faker::Address.state , country: "United States" , image:'https://assets.architecturaldesigns.com/plan_assets/342032205/thumb/810006RBT_Render-01_1662645969.jpg')
l17 = Listing.create(owner_id: Owner.ids.sample, price: rand(70..400), street_address: Faker::Address.street_address, city: Faker::Address.city , state: Faker::Address.state , country: "United States" , image:'https://cdn.houseplansservices.com/content/9ns4vp133de3p7n98dhr862uvd/w384x256.jpg?v=2')
l18 = Listing.create(owner_id: Owner.ids.sample, price: rand(70..400), street_address: Faker::Address.street_address, city: Faker::Address.city , state: Faker::Address.state , country: "United States" , image:'https://hips.hearstapps.com/hmg-prod/images/victorian-style-house-4-1652804696.jpg')
l19 = Listing.create(owner_id: Owner.ids.sample, price: rand(70..400), street_address: Faker::Address.street_address, city: Faker::Address.city , state: Faker::Address.state , country: "United States" , image:'https://cdn.houseplansservices.com/product/opb796i9ui1k22vhro34t2pcfo/w800x533.jpg?v=2')
l20 = Listing.create(owner_id: Owner.ids.sample, price: rand(70..400), street_address: Faker::Address.street_address, city: Faker::Address.city , state: Faker::Address.state , country: "United States" , image:'https://us.123rf.com/450wm/vincentstthomas/vincentstthomas1608/vincentstthomas160800003/64205741-a-beautiful-new-house-on-a-hill-in-canada-.jpg?ver=6')


r1= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "All around great stay in the lake!")
r2= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "Wonderful view of the lake, all the multiple levels of decks made for a incredible experience. Great spot for our boat and to enjoy the water.")
r3= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "This place was great! Truly a home away from home. Everything we could have needed was there! Our kids (ranging in age from 3 up to 9) had a blast at the lake and on the dock. ")
r4= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "Very nice accomodations! The stairs were steep but my girls loved them!")
r5= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "This is great")
r6= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "Best Vacation EVER!!!")
r7= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "We loved our stay in this lovely peaceful home! We loved the comfy beds, the hot tub, swings, etc. We want to come back!")
r8= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "The perfect place to relax, recharge, and enjoy!")
r9= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "Such an amazing place to stay and the location couldnt be any better!")
r10= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "Very clean & comfortable! Great location, close to everything!")
r11= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "Very tidy and lovely apartment equipped with everything you need. A good bed and nice bathroom.")
r12= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "Very easy to get around with public transportation and walking distance to awesome bars and restaurants.")
r13= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "The location was great. Its literally a 5 minute walk to the metro station but its also very central. To be honest I rarely used public transportation because it was always convenient to just walk but when I needed to it was right there.")
r14= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "?Incredible, host was very accommodating and very quick to respond with any questions. He is also flexible with check-in and check-out time, which was extremely helpful. The place was very clean and had all of the necessities for a few night stay.")
r15= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "Very quiet, clean, spacious and calming place.")
r16= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "Couldnt have been better. Apartment was beautiful and equipped with everything I needed (and lots of lovely touches / local design).")
r17= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "Very clean and stylish place with everything you needed. In a great location, right near heaps of great places to eat!")
r18= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "This space was perfectly located near great shops, restaurants and bars. The host was communicative and supremely helpful in giving advice for a places to go….clearly they love their neighborhood. The room was cozy with a modern bathroom and thoughtful, sweet touches…..quiet and super clean. Absolutely loved it!")
r19= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "Polite and accurate communication combined with elegant and well located apartment.")
r20= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "I was just crashing for one night before I headed to the airport, but I wish I could have stayed longer. This listing had absolutely everything I needed, down to laundry detergent. Id recommend it!")
r21= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "The apartment was perfect for our first trip to the city!")
r22= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "Nicely renovated in a cool neighbourhood close to metro and lots of transit.")
r23= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "The space was absolutely what was promised.")
r24= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "We loved our stay! We felt very comfortable, safe, and it was very clean.")
r25= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "The apartment is beautifully furnished with particular attention to all the details for the best comfort.")
r26= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "Apartment was clean, comfortable, and in a great location.")
r27= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "Place is clean, well designed and spacious. There are many great coffee shops, restaurants and shops in walking distance and the neighborhood itself is great!")
r28= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "Beautiful home and would love to visit again in the future.")
r29= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "If you are reading this, just book this amazing stay. Every little detail is perfectly thought out and the space couldnt be more perfect. We are already planning our next trip back!")
r30= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "A very relaxing stay in a quiet and quaint neighborhood.")
r31= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "Lovely apartment, really homely feel and beautiful touches.")
r32= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "Great and beautifully designed apartment!")
r33= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "Would definitely come back again!")
r34= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "A treat to stay in this lovely apartment, the way the light fell into the space, the environmental design and architecture, all of it is impressive.")
r35= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "Stylish beyond belief. Great location with restaurants, stores and and shops close by.")
r36= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "This is a retreat! Stunning home, has everything you will need, amazing hosts and a lot of privacy.")
r37= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "A beautiful and sunny place near enough facilities needed for a relaxing holiday.")
r38= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "This apartment was located in an incredible part of town. I was literally walking distance to everything.")
r39= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "I really enjoyed my stay here!")
r40= Review.create(listing_id: Listing.ids.sample, user_id: User.ids.sample, rating: rand(1..5), content: "This home is the perfect place for a couple. We stayed for five nights and had such a great time.")