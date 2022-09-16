import React from 'react'
import ListingCard from './ListingCard'
import Navbar from './Navbar'

function ListingContainer({listings, getData}) {
    

    const renderListings = listings.map(listing=> 
        <ListingCard key = {listing.id} listing = {listing} getData ={getData}/>)

    return(
        <>
        <Navbar  />
        <br></br>
        <div class="grid gap-8 space-x-1 lg:grid-cols-6" >
            {renderListings}
        </div>
    </>
    )
}

export default ListingContainer