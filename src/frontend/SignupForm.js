import React, { useState } from "react";
import './form.css'



const Signup = ({register}) =>{

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
        console.log(formData);
        register(formData);
        
        setFormData(initialState);

    }


    return (

        <form className="offset-lg-4" onSubmit={handleSubmit}>
            <div className="mb-3"> 
                <label className="form-label" htmlFor="username"> Username</label>
                <input className="form-control i"
                id="username" 
                type="text" 
                name="username"
                placeholder='username' 
                value={formData.username} 
                onChange={handleChanges}/>
            </div>

            <div className="mb-3" >
                <label className="form-label" htmlFor="password">password</label>
                <input 
                className="form-control i" 
                id="password" 
                type="password" 
                name="password"
                placeholder="password"
                value={formData.password} 
                onChange={handleChanges}/>
            </div>

            <div className="mb-3" >
                <label className="form-label" htmlFor="firstName"> First Name</label>
                <input 
                className="form-control i"
                id="firstName" 
                type="text" 
                name="firstName"
                placeholder='First Name' 
                value={formData.firstName} 
                onChange={handleChanges}/>
            </div>
       

            <div className="mb-3">
                <label className="form-label" htmlFor="lastName"> Last Name</label>
                <input
                className="form-control i"
                id="lastName" 
                type="text" 
                name="lastName"
                placeholder='Last Name' 
                value={formData.lastName} 
                onChange={handleChanges}/>

            </div>



            <div className="mb-3">
                <label className="form-label" htmlFor="email">email</label>
                <input
                className="form-control i"
                id="email" 
                type="email" 
                name="email"
                placeholder="email"
                value={formData.email} 
                onChange={handleChanges}/>
            </div>


            <button className="btn btn-primary" >Register</button>

                
  

            
        </form>
    )
}
export default Signup;