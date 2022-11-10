import React, {useState} from 'react'

const SearchBar = ({setState, search}) => {
    
    const [value , setValue] = useState('')
    const handleChange = (e)=>{
        setValue(e.target.value)
        }
    const handleSubmit = (e) =>{
            e.preventDefault()
            console.log(value)
            search(value)

        }
    return(
        <form onSubmit={handleSubmit} >
        <label htmlFor="header-search">
            <span className="visually-hidden">Search</span>
        </label>
        <input onChange={handleChange} 
            type="text"
            id="header-search"
            value={value}
            placeholder="search"
            name="search" 
        />
        <button >Search</button>
    </form>

    )

    };

export default SearchBar;