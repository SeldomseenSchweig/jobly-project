import React, { useState } from "react";




const Signup = () =>{

    const initialState = {
        username:"",
        email:"",
        password:"",
        firstName:"",
        lastName:""

    }

    const [formData, setFormData] = useState(initialState)
    const handleChanges = e => {
        const {name, value} = e.target

        setFormData( data => ({
            ...data,
            [name]:value
        }))
    }
    // const handleUsernameChange = (e) =>{
    //     setUsername(e.target.value);
    // }
    // const handleEmailChange = (e) =>{
    //     setEmail(e.target.value);
    // }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const {username,email,password, firstName,lastName} = formData
        alert(`${username} and ${email} and ${password} and ${firstName} and ${lastName} submitted`);
        setFormData(initialState);

    }


    return (

        <form onSubmit={handleSubmit}>

            <label htmlFor="username"> Username</label>
            <input 
            id="username" 
            type="text" 
            name="username"
            placeholder='username' 
            value={formData.username} 
            onChange={handleChanges}/>

            <label htmlFor="password">password</label>
            <input 
            id="password" 
            type="password" 
            name="password"
            placeholder="password"
            value={formData.password} 
            onChange={handleChanges}/>

            <label htmlFor="firstName"> First Name</label>
            <input 
            id="firstName" 
            type="text" 
            name="firstName"
            placeholder='First Name' 
            value={formData.firstName} 
            onChange={handleChanges}/>

            <label htmlFor="lastName"> Last Name</label>
            <input 
            id="lastName" 
            type="text" 
            name="lastName"
            placeholder='Last Name' 
            value={formData.lastName} 
            onChange={handleChanges}/>

            <label htmlFor="email">email</label>
            <input 
            id="email" 
            type="email" 
            name="email"
            placeholder="email"
            value={formData.email} 
            onChange={handleChanges}/>

            <button >add</button>
        </form>
    )
}
export default Signup;