import React from 'react'
import ListingCard from './ListingCard'

function ListingContainer({listings}) {
    console.log(listings)

    const renderListings = listings.map(listing=> 
        <ListingCard key = {listing.id} listing = {listing}/>)

    return(
        <div>
        {renderListings}
        </div>

    )
}

export default ListingContainer