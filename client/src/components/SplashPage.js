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

    <div class="h-screen flex flex-col items-center 
    justify-center border  rounded" >
        
            
            <button  onClick ={navigateToSignUp} class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150  ease-in-out">Sign up</button>
            <br></br>
            <p>or</p>
            <br></br>
            <button onClick = {navigateToLogin} class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150  ease-in-out" >Log in</button>
        
        
    </div>
)


   
}

export default SplashPage