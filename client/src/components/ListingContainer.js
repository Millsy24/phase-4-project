import React from 'react'
import ListingCard from './ListingCard'

function ListingContainer({listings, getData}) {
    

    const renderListings = listings.map(listing=> 
        <ListingCard key = {listing.id} listing = {listing} getData ={getData}/>)

    return(
        <div className = "px-2 flex -mx-2 w-1/3 px-2">
        {renderListings}
        </div>

    )
}

export default ListingContainer