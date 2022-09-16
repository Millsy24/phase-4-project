import React from 'react'
import ReviewContainer from './ReviewContainer'
import {useState} from 'react'



function ListingCard ({listing, getData}) {
    const [getReviews, setGetReviews] = useState(false)

    const toggleReviews = () => {
        (setGetReviews(getReviews=> !getReviews))
    }
    

    return(
        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" >
            <div class="p-5" >
                <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" >{listing.city}, {listing.state}</h2>
            </div>
            
            <a href='#'>
                <img class="rounded-t-lg" alt="" src={listing.image}></img>
            </a>
            <h3  >{listing.rating}</h3>
            <div>
              { getReviews ? <ReviewContainer id={listing.id} reviews={listing.reviews} getData = {getData} /> : null }
            </div>
            <button class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500" onClick = {toggleReviews}>Reviews</button>
        </div>

    )
}

export default ListingCard