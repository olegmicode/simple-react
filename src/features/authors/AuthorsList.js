import React from 'react'
import { useSelector } from 'react-redux'

export const AuthorsList = () => {
  const authors = useSelector(state => state.authors)

  const renderedAuthors = authors.map(author => (
    <h3 key={author.email}>{author.email}</h3>
  ))

  return (
    <div>
      {renderedAuthors}
    </div>
  )
}