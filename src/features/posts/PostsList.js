import React from 'react'
import { useSelector } from 'react-redux'
import PostCard from '../../components/PostCard'

export const PostsList = () => {
  const posts = useSelector(state => state.posts)

  const renderedPosts = posts.map((post, i) => (
    <div className="col">
  	  <PostCard key={i} post={post} />
    </div>
  ))

  return (
    <div>
      <button className="btn btn-primary btn-sm">Add New</button>
      <div className="row mt-2">
        {renderedPosts}
      </div>
    </div>
  )
}