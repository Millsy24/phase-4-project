import React from "react";
import {useNavigate} from "react-router-dom";
import {useState} from "react"
import ListingContainer from "./ListingContainer";
function Login({setCurrentUser}) {

  const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }).then((res) => {
          if (res.ok) {
            res.json().then((user) => {
              setCurrentUser(user);
              navigate('/listings')
            });
            
          } else {
            res.json().then((errors) => {
              console.error(errors);
            });
          }
        });
        

      };

      
    
      return (
        <form class="
        relative
        w-full
        flex flex-wrap
        items-center
        justify-evenly
        py-4
        bg-gray-300
        text-gray-700
        hover:text-gray-700
        focus:text-gray-8700
        shadow-lg
        navbar navbar-expand-lg navbar-light
        " onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            // class="border-black border-2"
            id="email-input"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <br></br>
          <p></p>
          <label htmlFor="password">Password:</label>
          <input
            // class="border-black border-2"
            id="password-input"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <br></br>
          <p></p>
          <button 
          // class="border-black border-2" 
          type="submit">Submit</button>
        </form>
      );
    };

export default Login