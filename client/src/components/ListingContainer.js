import React from 'react'
import ListingCard from './ListingCard'

function ListingContainer({listings, getData}) {
    

    const renderListings = listings.map(listing=> 
        <ListingCard key = {listing.id} listing = {listing} getData ={getData}/>)

    return(
        <div>
        {renderListings}
        </div>

    )
}

export default ListingContainer