import React, { useState, useEffect, Fragment } from 'react';
import {getAllPosts} from '../api'
import { Search } from '../components'
import { config } from '../config';


const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [postId, setPostId] = useState([]);

const handleDelete = async (postIdDelete) => {

        const response = await fetch(`${config.apiLink}/${config.cohort}/posts/${postIdDelete}`,{
            method: 'DELETE',
                }
            );
            const data = await response.json();
            if (data) {
                const newPosts = posts.filter(post => post.id !== postIdDelete);
                setPosts(newPosts);
            }
        }
  
  useEffect(() => {
    const fetchPosts = async () => {
      const {data} = await getAllPosts()
      setPosts(data.posts)
  }
  
    fetchPosts();
  }, [])

    return (
    <main>
        <Search />
        <h2>Posts</h2>
        <br></br>
            {
            posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <br></br>
                    <p>{post.description}</p>
                    <p>{post.location}</p>
                    <h5>{post.price}</h5>
                    <h5>{post.willDeliver}</h5>
                    <Fragment>
                        <button type="button"
                            className="editBtn" 
                            onClick={(event) => setPostId(post.id)}>Edit</button>
                        <button type="button"
                            className="delBtn" 
                            onClick={(event) => (handleDelete(post.id))}>Delete</button>
                    </Fragment>
                </div>))
            }
    </main>
    )
}

//need to ad onclick on button for update
export default Posts;