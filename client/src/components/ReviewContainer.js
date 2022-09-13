import React from "react";
import Review from "./Review";

function ReviewContainer({reviews}) {

    const renderReviews = reviews.map(review => {
            return (<Review key={review.id} review={review.content} />)
        })
    

    return(
        <ul>
            {renderReviews}
        </ul>
    )
}

export default ReviewContainer