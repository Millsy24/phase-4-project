import React from 'react'
import ReviewContainer from './ReviewContainer'
import {useState} from 'react'



function ListingCard ({listing, getData}) {
    const [getReviews, setGetReviews] = useState(false)

    const toggleReviews = () => {
        (setGetReviews(getReviews=> !getReviews))
    }
    

    return(
        <div>
            <h2>{listing.city}, {listing.state}</h2>
            <img alt="" src={listing.image}></img>
            <h3>{listing.rating}</h3>
            <div>
              { getReviews ? <ReviewContainer id={listing.id} reviews={listing.reviews} getData = {getData} /> : null }
            </div>
            <button onClick = {toggleReviews}>Reviews</button>
        </div>

    )
}

export default ListingCard