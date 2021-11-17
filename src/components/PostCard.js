import { Link } from 'react-router-dom'

const AuthorCard = (props) => {
  return (
    <div className="card h-100" style={{ width: '18rem' }} key={props.post.title}>
      <img src={props.post.image} className="card-img-top post-card-image" alt={props.post.image} />
      <div className="card-body">
        <h6>{props.post.title}</h6>
        <div className="card-text">{props.post.content}</div>
        <Link to={`posts/${props.post.id}`} className="card-link">More...</Link>
      </div>
    </div>
  )
}

export default AuthorCard