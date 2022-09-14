import React, {useState, useEffect} from 'react'
import ListingCard from './ListingCard'

function ListingContainer() {

    const [listings, setListings] = useState([])
    useEffect(() => {
     fetch("/listings")
    .then(r => r.json())
    .then(data => setListings(data))
    }, [])

    const renderListings = listings.map(listing=>
        <ListingCard key = {listing.id} listing = {listing}/>)
    return(
        <div>
        {renderListings}
        </div>

    )
}

export default ListingContainer