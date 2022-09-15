import React from 'react'
import {useState, useEffect} from 'react'
import ListingContainer from './components/ListingContainer'
import Login from './components/Login'
import Renter from './components/Renter'
import Navbar from './components/Navbar'
import SignupForm from './components/SignupForm'
import ReviewContainer from './components/ReviewContainer'
import Review from './components/Review'
import SplashPage from './components/SplashPage'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";




function App() {
const [listings, setListings] = useState([])
useEffect(() => {
  fetch("/listings")
  .then(r => r.json())
  .then(data => setListings(data))

}, [])

const [currentUser, setCurrentUser] = useState('')

useEffect(()=> {
fetch(`/auth`)
.then(res => {
  if (res.ok){
    res.json().then(user => setCurrentUser(user))
  }
})
}, [])

  // if (!currentUser) return <SplashPage setCurrentUser={setCurrentUser} />

 const getData = () => {
  fetch('/listings')
  .then(res => res.json())
  .then(data => setListings(data))
 }

 


 

  return (
    <div className="App">
      <h1 className="text-3xl font-bold ">Hello World</h1>
        <Navbar setCurrentUser = {setCurrentUser}/>
        <Routes>
          <Route index exact element={<SplashPage />} />
          <Route path='/listings' element={<ListingContainer listings={listings} getData = {getData}/>} />
          <Route path='/renter' element={<Renter />} />
          <Route path ='/login' element ={<Login setCurrentUser ={setCurrentUser}/>} />
          <Route path = '/signup' element = {<SignupForm setCurrentUser = {setCurrentUser}/>}/> 
        </Routes>
      
    </div>
  )
}

export default App;
