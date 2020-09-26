import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <bar
      position='static'

    >
      <toolbar>
        <h5>
          Google Books
        </h5>
        <Link to='/'>
          <button color='inherit'>Search</button>
        </Link>
        <Link to='/saved'>
          <button color='inherit'>Saved</button>
        </Link>
      </toolbar>
    </bar>
  )
}

export default Navbar
