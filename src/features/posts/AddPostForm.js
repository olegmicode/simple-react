import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postAdded } from './postsSlice'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

  const onSavePostClicked = e => {
    e.preventDefault()

    if (title && content) {
      dispatch(
        postAdded({
          title,
          content
        })
      )

      setTitle('')
      setContent('')
    }
  }

  return (
    <section>
      <h3>Add a New Post</h3>

      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="form-control"
            placeholder="Post title here"
            value={title}
            onChange={onTitleChanged}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Content</label>
          <textarea
            id="content"
            name="content"
            className="form-control"
            rows="3"
            value={content}
            onChange={onContentChanged}
          />
        </div>
        <button
          className="btn btn-primary btn-sm"
          onClick={onSavePostClicked}
        >Save</button>
      </form>
    </section>
  )
}