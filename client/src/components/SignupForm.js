import React, {useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


function SignupForm ({setCurrentUser}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [dob, setDob] = useState('')
    const [phone, setPhone] = useState('')

    const navigate = useNavigate()

    

    function handleSubmit(e) {
        e.preventDefault()

        const userData = {
            name,
            email,
            password,
            dob,
            phone
        }
        fetch('/users',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(userData)
        }).then((res) => {
            if (res.ok) {
                res.json().then((user) => {
                    setCurrentUser(user)
                    navigate('/listings')
                })
            }
            else {
                res.json().then((errors)=>{
                    console.log(errors)
                })
            }
        })
    
        }



        
    return (
        <div  >
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
        " onSubmit = {handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type= "text" name = "username" value = {name} onChange={(e)=>setName(e.target.value)}></input>
            <label htmlFor="email">Email:</label>
            <input type= "text" name = "email" value = {email} onChange={(e)=>setEmail(e.target.value)}></input>
            <label htmlFor="password">Password:</label>
            <input type= "text" name="password" value = {password} onChange={(e)=>setPassword(e.target.value)}></input>
            <label htmlFor="dob">Date of Birth:</label>
            <input type= "text" name="dob" value = {dob} onChange={(e)=>setDob(e.target.value)}></input>
            <label htmlFor="phone">Phone Number:</label>
            <input type= "text" name="phone" value = {phone} onChange={(e)=>setPhone(e.target.value)}></input>
            <button type="submit">Submit</button>
        </form>
</div>
    )
}

export default SignupForm