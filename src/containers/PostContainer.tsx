import React, {useEffect} from 'react'
import Container from '@mui/material/Container'
import PostList from '../components/Posts/PostList'
import PostForm from '../components/Posts/PostForm'
import {usePostService} from '../hooks'

const PostContainer = () => {
  const {posts, deletePost, updatePost, fetchAllPosts, createPost} = usePostService()

  useEffect(() => {
    fetchAllPosts()
  },[fetchAllPosts])
  return (
    <>
      <Container maxWidth="xs">
        <PostForm onSubmitClick={createPost}/>
      </Container>
      <Container sx={{py: 4}} maxWidth="md">
        <PostList posts={posts} onDeletePost={deletePost} onUpdatePost={updatePost}/>
      </Container>
    </>
  )
}

export default PostContainer
