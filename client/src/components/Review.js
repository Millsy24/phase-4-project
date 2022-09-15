import React from "react";
import {useState} from 'react'

function Review({review, getData}) {
    const [rating, setRating] = useState(1)
    const [content, setContent] = useState('')
    const [editForm, setEditForm] = useState(false)

    const toggleEditForm = () => {
        setEditForm(editForm => !editForm)
    }

    const handleChangeRating = (e) => {
        setRating(e.target.value)
    }

    const handleChangeContent = (e) => {
        setContent(e.target.value)
    }

    console.log(review.id)

    console.log(review)

   


    
    const handleEditForm = (e) =>  {
        e.preventDefault()

       const reviewData = {
            rating,
            content,
        }

        fetch(`/reviews/${review.id}`,{
            method: 'PATCH', 
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(reviewData)
        })
        .then((resp) => resp.json())
        .then(newReview => getData(newReview))
        e.target.reset()
    }

    const handleDelete = (e) => {
        e.preventDefault()
        
        fetch(`/reviews/${review.id}`,{
            method: 'DELETE'
            
        })
        .then((resp) => resp.json())
        .then(newReview => getData(newReview))
        
    }


    const editFormInputs =
    <form onSubmit = {handleEditForm}>
        { <input placeholder = "Rating" onChange = {handleChangeRating}></input> }
        <textarea placeholer = "Your review" onChange = {handleChangeContent}></textarea>
        <button>Edit</button>
        
    </form>



    return(
        <>
        
        <li><strong>{review.rating}</strong> {review.content}</li>
        {editForm ? <button onClick = {toggleEditForm} >Cancel Edit Review</button> : <button onClick = {toggleEditForm}>EditReview</button>}
        {editForm ? editFormInputs: null}
        <button onClick={handleDelete}>Delete Review</button>
        </>
    )
}

export default Review