import React from 'react'
import ReviewContainer from './ReviewContainer'
import {useState} from 'react'



function ListingCard ({listing, getData}) {
    const [getReviews, setGetReviews] = useState(false)

    const toggleReviews = () => {
        (setGetReviews(getReviews=> !getReviews))

        console.log(listing)
    }
    

    return(
        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" >
            <div class="p-5" >
                <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" >{listing.city}, {listing.state}</h2>
            </div>
            
            <a href='#'>
                <img class="rounded-t-lg" alt="" src={listing.image}></img>
            </a>
            <button class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500" onClick = {toggleReviews}>Reviews</button>
            <h3>{listing.reviews.rating}</h3>
            {/* <h3>Price:${listing.price}/Night</h3> */}
            <div>
              { getReviews ? <ReviewContainer id={listing.id} reviews={listing.reviews} getData = {getData} /> : null }
            </div>
            {/* <button class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500" onClick = {toggleReviews}>Reviews</button> */}
        </div>

    )
}

export default ListingCard