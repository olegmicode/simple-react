import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import PostCard from '../../components/PostCard'

export const PostsList = () => {
  const posts = useSelector(state => state.posts)

  const renderedPosts = posts.map((post, i) => (
    <div key={i} className="col">
  	  <PostCard post={post} />
    </div>
  ))

  return (
    <section>
      <div className="page-action">
        <Link to="/posts/add">
          <button className="btn btn-primary btn-sm">Add New</button>
        </Link>
      </div>
      <div className="page-content">
        <div className="row row-cols-1 row-cols-md-4 g-2">
          {renderedPosts}
        </div>
      </div>
    </section>
  )
}