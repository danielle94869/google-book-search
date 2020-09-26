import React, { useContext } from 'react'
import BookContext from '../../utils/BookContext'
const Form = () => {
  const {
    search,
    handleInputChange,
    handleSearchAPI
  } = useContext(BookContext)

  return (
    <form onSubmit={handleSearchAPI}>
      <div>
        label='Search'
        variant='filled'
        name='search'
        value={search}
        onChange={handleInputChange}
      </div>
      <p>
        <button
          variant='contained'
          onClick={handleSearchAPI}
        >
          Search
        </button>
      </p>
    </form>
  )
}

export default Form
