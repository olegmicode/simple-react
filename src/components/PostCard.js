const AuthorCard = (props) => {
  return (
    <div className="card" style={{ width: '18rem' }} key={props.post.title}>
      <img src={props.post.image} className="card-img-top post-image" alt={props.post.image} />
      <div className="card-body">
        <h6>{props.post.title}</h6>
        <div className="card-text">{props.post.content}</div>
      </div>
    </div>
  )
}

export default AuthorCard