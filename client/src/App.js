import React from 'react'
import {useState, useEffect} from 'react'
import ListingContainer from './components/ListingContainer'


function App() {
const [listings, setListings] = useState([])
useEffect(() => {
  fetch("/listings")
  .then(r => r.json())
  .then(data => setListings(data))

}, [])


  return (
   <ListingContainer listings = {listings}/>
  )
}

export default App;
