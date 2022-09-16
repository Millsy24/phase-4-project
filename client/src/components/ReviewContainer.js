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
            "user_id": 4,
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
        <div  >
            <ul>
                {renderReviews}
            </ul>
            <br></br>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input max='5' min='1' class="border-solid border-4" onChange={(e) => setRatingValue(e.target.value)} type="number" placeholder="Rating" ></input>
                <input class="border-solid border-4" onChange={(e) => setRatingContent(e.target.value)} placeholder="Content" ></input>
                <button class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Submit!</button>
                <br></br>
                <br></br>
            </form>
        </div>
    )
}

export default ReviewContainer