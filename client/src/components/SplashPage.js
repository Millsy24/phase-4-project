import React from 'react'
import { useNavigate} from "react-router-dom";


function SplashPage () {


    const navigate = useNavigate()

    const navigateToSignUp = () => {
        navigate('/signup')

    }

    const navigateToLogin = () => {
        navigate('/login')
    }

    





return(

    <div>
        
            
            <button onClick ={navigateToSignUp}>Sign up</button>
            <button onClick = {navigateToLogin}>Login</button>
        
        
    </div>
)


   
}

export default SplashPage