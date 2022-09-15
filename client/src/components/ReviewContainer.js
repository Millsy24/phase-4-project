import React, {useState} from "react";
import Review from "./Review";

function ReviewContainer({reviews, id, getData}) {

    const renderReviews = reviews.map(review => {
            return (<Review key={review.id} review={review} getData ={getData}/>)
        })

    function handleSubmit(e) {
        e.preventDefault()

        const data = {
            "listing_id": id,
            "user_id": 2,
            "rating": ratingValue,
            "content": ratingContent
        }

        fetch('/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((resp) => resp.json())
        .then(newReview => getData(newReview))
        e.target.reset()
    }

    const [ratingValue, setRatingValue] = useState(0)
    const [ratingContent, setRatingContent] = useState('')
    

    return(
        <>
            <ul>
                {renderReviews}
            </ul>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input max='5' min='1' onChange={(e) => setRatingValue(e.target.value)} type="number" placeholder="Rating" ></input>
                <input onChange={(e) => setRatingContent(e.target.value)} placeholder="Content" ></input>
                <button >Submit!</button>
            </form>
        </>
    )
}

export default ReviewContainer