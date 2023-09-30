import React from 'react'
import { useState, useEffect } from 'react'

function SearchBar({onChange}) {
const [search, setSearch] = useState('')
const handleChange = (e) => {
    setSearch(e.target.value)
    onChange(e.target.value)
}

  return (
    <div>
      <input type="text" placeholder="Search" value={search} onChange={handleChange} />
    </div>
  )
}

export default SearchBar
