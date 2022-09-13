import React from 'react'


function ListingCard ({listing}) {
    

    return(
        <div>
            <h2>{listing.city}, {listing.state}</h2>
            <img alt="" src={listing.image}></img>
            <h3>{listing.rating}</h3>
        </div>

    )
}

export default ListingCard