const AuthorCard = (props) => {
  return (
    <div className="card m-2" style={{ width: '18rem' }} key={props.author.email}>
      <img src={`images/${props.author.image}`} className="card-img-top" alt="..." />
      <div className="card-body">
        <div className="card-text">Joined in {props.author.joinedDate}</div>
        <div className="card-text">{props.author.email}</div>
        <div className="card-text"><span className="fw-bold">{props.author.booksWritten}</span> books written</div>
      </div>
    </div>
  )
}

export default AuthorCard