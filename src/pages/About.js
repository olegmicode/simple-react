import AuthorCard from '../components/AuthorCard'

const people = [
  {
    image: '1-image.jpg',
    joinedDate: '2019',
    email: 'george.bluth@reqres.in',
    booksWritten: 26
  }, {
    image: '2-image.jpg',
    joinedDate: '2019',
    email: 'janet.weaver@reqres.in',
    booksWritten: 27
  }, {
    image: '3-image.jpg',
    joinedDate: '2019',
    email: 'emma.wong@reqres.in',
    booksWritten: 28
  }, {
    image: '4-image.jpg',
    joinedDate: '2019',
    email: 'eve.holt@reqres.in',
    booksWritten: 29
  }, {
    image: '5-image.jpg',
    joinedDate: '2019',
    email: 'charles.morris@reqres.in',
    booksWritten: 30
  }, {
    image: '6-image.jpg',
    joinedDate: '2019',
    email: 'tracey.ramos@reqres.in',
    booksWritten: 31
  }
]

const AuthorList = () => {
  const AuthorCards = people.map((author) => {
    return <AuthorCard author={author} key={author.email} />
  })

  return (
    <div className="d-flex flex-wrap">
      {AuthorCards}
    </div>
  )
}

export default AuthorList