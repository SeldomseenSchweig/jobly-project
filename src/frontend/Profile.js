import React, {useContext, useState} from "react";
import CurrentUserContext from "./CurrentUserContext";


const ProfileEditForm = () =>{
    const user = useContext(CurrentUserContext)
    // console.log(user.currentUser.user);
    let initialState

 if(!user.currentUser){
     initialState = {
        email:"",
        firstName:"",
        lastName:"",
        password:""

    }

 }else{
    initialState = {
        email:user.currentUser.user.email,
        firstName:user.currentUser.user.firstName,
        lastName:user.currentUser.user.lastName  ,
        password:""

    }
     
 }

console.log(initialState)

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
        
        setFormData(initialState);

    }


    return (

        <form className="offset-lg-4" onSubmit={handleSubmit}>
            <div className="mb-3"> 
                <label className="form-label" htmlFor="username"> Username</label>
                {!user.currentUser ? <></>: <h4>{user.currentUser.user.username}</h4>}
            </div>


            <div className="mb-3" >
                <label className="form-label" htmlFor="firstName"> First Name</label>
                <input 
                className="form-control i"
                id="firstName" 
                type="text" 
                name="firstName"
                placeholder={!user.currentUser ? "":  user.currentUser.user.firstName} 
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
                placeholder={!user.currentUser ? "":  user.currentUser.user.lastName} 
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
                placeholder={!user.currentUser ? "":  user.currentUser.user.email} 
                value={formData.email} 
                onChange={handleChanges}/>
            </div>

            <div className="mb-3">
                <label className="form-label" htmlFor="password">To change user information, verify your password</label>
                <input
                className="form-control i"
                id="password" 
                type="password" 
                name="password"
                placeholder="password"
                value={formData.password} 
                onChange={handleChanges}/>
            </div>


            <button className="btn btn-primary" >Submit Changes</button>

                
  

            
        </form>
    )





    



}

export default ProfileEditForm;
