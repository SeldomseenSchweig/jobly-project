import React, {useState} from 'react'
import { Redirect } from 'react-router-dom';

const SearchBar = ({setState, search}) => {
    
    const [value , setValue] = useState('')
    const handleChange = (e)=>{
        setValue(e.target.value)
        }
        const handleSubmit = (e) =>{
            e.preventDefault()
            search()

        }
    return(
        <form method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search</span>
        </label>
        <input onChange={handleChange} onSubmit={handleSubmit}
            type="text"
            id="header-search"
            value={value}
            placeholder="search"
            name="search" 
        />
        <button type="submit">Search</button>
    </form>

    )

    };

export default SearchBar;