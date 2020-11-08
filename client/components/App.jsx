import React from 'react'
import SearchBar from './SearchBar'

const api = {
  // may be just http; no s
  url: 'https://api.openweathermap.org/data/2.5/',
  key: 'd40bc52a88129c40e812a0c718b6b78b'
}

const App = () => {
  return (
    <div className='app cloudy'>
      <SearchBar />
    </div>
  )
  
}

export default App
