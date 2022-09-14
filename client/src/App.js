import React from 'react'
import {useState, useEffect} from 'react'
import ListingContainer from './components/ListingContainer'
import Login from './components/Login'
import Renter from './components/Renter'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignupForm from './components/SignupForm'


function App() {
const [listings, setListings] = useState([])
useEffect(() => {
  fetch("/listings")
  .then(r => r.json())
  .then(data => setListings(data))

}, [])


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={SignupForm} />
          <Route path='/AllListings' component={ListingContainer} />
          <Route path='/Renter' component={Renter} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
