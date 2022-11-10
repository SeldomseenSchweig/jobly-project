import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';



const LoginForm = ({login}) =>{
    const history = useHistory()
    const initialState = {
        username:"",
        password:""
        
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
        const {username,password} = formData
        login({username,password});
        history.push('/')

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


            <button >Submit</button>
        </form>
    )
}

export default LoginForm;