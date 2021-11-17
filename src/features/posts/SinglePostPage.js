import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const SinglePostPage = ({ match }) => {
  const { id } = match.params

  const post = useSelector((state) => 
    state.posts.find((post) => post.id === id)
  )

  if (!post) {
    return (
      <section>No Posts</section>
    )
  }
  return (
    <section>
      <div className="page-action">
        <Link to={`/posts/edit/${post.id}`}>
          <button className="btn btn-primary btn-sm">Edit Post</button>
        </Link>
      </div>
      <div className="page-content">
        <div>
          <img src={post.image} alt={post.image} className="single-post-image" />
        </div>
        <br />
        <h3>{post.title}</h3>
        <br />
        <p>{post.content}</p>
      </div>
    </section>
  )
}