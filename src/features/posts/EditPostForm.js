import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { postUpdated } from './postsSlice'

export const EditPostForm = ({ match }) => {
  const { id } = match.params
  const post = useSelector(state => state.posts.find(post => post.id === id))

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)

  const dispatch = useDispatch()
  const history = useHistory()

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

  const onSavePostClicked = e => {
    e.preventDefault()

    if (title && content) {
      dispatch(postUpdated({ id, title, content }))
      history.push(`/posts/${id}`)
    }
  }

  return (
    <section>
      <h3>Edit Post</h3>

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