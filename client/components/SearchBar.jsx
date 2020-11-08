import React from 'react'

const SearchBar = () => {
    return (
        <div className='search'>
            <form>
                <input type="text" placeholder='Enter your city...' />
                <input type="submit" value='Search' />
            </form>
        </div>
    )
}

export default SearchBar