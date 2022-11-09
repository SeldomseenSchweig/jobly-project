import React, {useState} from 'react'
import { useEffect } from 'react/cjs/react.production.min';
import { Redirect } from 'react-router-dom';

const SearchBar = ({setState, title}) => {
    
    const [search , setSearch] = useState('')
    const handleChange = (e)=>{
        setSearch(e.target.value)
        }
        const handleSubmit = () =>{
            setState(search)
            return <Redirect to={`/${title}`} />

        }

    return(
        <form method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search</span>
        </label>
        <input onChange={handleChange} onSubmit={handleSubmit}
            type="text"
            id="header-search"
            value={search}
            placeholder="search"
            name="search" 
        />
        <button type="submit">Search</button>
    </form>

    )

    };

export default SearchBar;