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

    <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        
            
            <button onClick ={navigateToSignUp} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Sign up</button>
            <button onClick = {navigateToLogin}class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Login</button>
        
        
    </div>
)


   
}

export default SplashPage