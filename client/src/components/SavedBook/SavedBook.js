import React from 'react'

import Card from '@material-ui/core/Card'

const SavedBook = props => {
  return (
    <Card>
      {
        props.book.image.length > 0 ? (
          <img
            src={props.book.image}
            alt={props.book.title}

          />
        ) : (
            <h5>
              No Image Available
            </h5>
          )
      }
      <Card>
        <h1>
          {props.book.title}
        </h1>
        <h2>
          Written By: {props.book.authors.join(', ')}
        </h2>
        <h1>
          Type: {props.book.description}
        </h1>
      </Card>
      <Card>
        <button
          size='small'

          onClick={() => props.handleDeleteSaved(props.book._id)}
        >
          Delete
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

export default SavedBook
