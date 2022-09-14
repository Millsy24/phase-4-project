import React, {useState} from 'react'


function SignupForm () {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [dob, setDob] = useState('')
    const [phone, setPhone] = useState('')

    

    function handleSubmit(e) {
        e.preventDefault()

        const user = {
            name,
            email,
            password,
            dob,
            phone
        }
        fetch('/users',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
        })
    
    }



        
    return (
        <div>
        <form onSubmit = {handleSubmit}>
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