import React from 'react'
import {useState, useEffect} from 'react'
import ListingContainer from './components/ListingContainer'
import Login from './components/Login'
import Renter from './components/Renter'
import Navbar from './components/Navbar'
import SignupForm from './components/SignupForm'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




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

 if (!currentUser) return <Login setCurrentUser={setCurrentUser} />




  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<SignupForm />} />
          <Route path='/AllListings' element={<ListingContainer listings={listings}/>} />
          <Route path='/Renter' element={<Renter />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
