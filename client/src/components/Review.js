import React from "react";

function Review({review, rating}) {

    return(
        
        <li><strong>{rating}</strong> {review}</li>
        
    )
}

export default Review