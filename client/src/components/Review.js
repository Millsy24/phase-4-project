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
        .then(() => getData())
        
    }


    const editFormInputs =
    <form onSubmit = {handleEditForm}>
        <label>Rating: </label>
        <input class="border-solid border-4"  onChange = {handleChangeRating}></input> 
        <br></br>
        <label>Text: </label>
        <input class="border-solid border-4"  onChange = {handleChangeContent}></input>
        <br></br>
        <button class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Edit</button>
        
    </form>



    return(
        <>
        
        <li><strong>Rating:{review.rating}/5</strong> {review.content}</li>
        {editForm ? <button class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick = {toggleEditForm} >Cancel Edit Review</button> : <button class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick = {toggleEditForm}>✏</button>}
        {/* <br></br> */}
        {/* <br></br> */}
        {editForm ? editFormInputs: null}
        <button class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleDelete}>🗑</button>
        </>
    )
}

export default Review