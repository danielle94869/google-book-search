import React from 'react'

import Card from '@material-ui/core/Card'

const SearchedBook = props => {
  return (
    <Card>
      <img
        src={props.book.image}
        alt={props.book.title}

      />
      <Card>
        <h5>
          {props.book.title}
        </h5>
        <h5>
          Written By: {props.book.authors.join(', ')}
        </h5>
        <h5>
          Type: {props.book.description}
        </h5>
      </Card>
      <Card>
        <button
          size='small'

          onClick={() => props.handleSaveBook(props.book.bookID)}
        >
          Save
        </button>
        <a href={props.book.link} target='_blank' rel='noopener noreferrer'>
          <button
            size='small'

          >
            View
          </button>
        </a>
      </Card>
    </Card>
  )
}

export default SearchedBook
