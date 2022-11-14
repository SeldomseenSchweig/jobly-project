import React, {useContext, useState,useEffect} from "react";
import JoblyApi from "./api";
import CurrentUserContext from "./CurrentUserContext";


const ProfileEditForm = () =>{
    const user = useContext(CurrentUserContext)
    const [formData, setFormData] = useState(
        { email:"",
        firstName:"",
        lastName:""  ,
        password:""})


    useEffect(() => {
        if(!user.currentUser){
            return
        }
    
        const initialState = {
            email:user.currentUser.user.email,
            firstName:user.currentUser.user.firstName,
            lastName:user.currentUser.user.lastName  ,
            password:""
    
        }

        setFormData(initialState)
       
      }
      , [user]);
     
 


   


    const handleChanges = e => {
        const {name, value} = e.target

        setFormData( data => ({
            ...data,
            [name]:value
        }))
    }

    const handleSubmit = (e) =>{
        let profileData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
          };
         let username = user.currentUser.user.username
        JoblyApi.update(username, profileData)        
        setFormData({ 
            email:"",
        firstName:"",
        lastName:""  ,
        password:""});

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
