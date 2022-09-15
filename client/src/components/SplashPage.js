import React from 'react'
import { BrowserRouter as Router, Routes, useNavigate, Link} from "react-router-dom";


function SplashPage () {


    const navigate = useNavigate()

    const navigateToSignUp = () => {
        navigate('/login')

    }

    const navigateToLogin = () => {
        navigate('/signup')
    }

    





return(

    <div>
        
            
            <button onClick ={navigateToSignUp}>Sign up</button>
            <button onClick = {navigateToLogin}>Login</button>
        
        
    </div>
)


   
}

export default SplashPage