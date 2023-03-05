import React, { useState, useEffect, Fragment, useCallback } from 'react';
import { getAllPosts } from '../api'
import { PostForm } from '../components'
import { config } from '../config';
import { useNavigate, Link } from 'react-router-dom'


const Posts = ({ signedInName, isSignedIn, token }) => {
    const [posts, setPosts] = useState([]);
    const [postId, setPostId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [postsCopy, setPostsCopy] = useState([]);
    const [dropdownValue, setDropDownValue] = useState('title');
    const [showMsgBox, setShowMsgBox] = useState(false);
    const [message, setMessage] = useState('');
    

//DELETE --only deletable if author of post-----------------------------------------------
    const handleDelete = async (postIdDelete) => {
        try {
            const response = await fetch(`${config.apiLink}/${config.cohort}/posts/${postIdDelete}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
                }
            });
            const result = await response.json();

            if (result.success) {
            //     alert('Only author posts are allowed to delete their post')
            // } else {
                const newPosts = posts.filter(post => post._id !== postIdDelete);
                setPosts(newPosts);
                return result;
            }
        } catch(error){
            console.error(error);
        }
    }


//FETCH DATA-----------------------------------------------------------------------------
  useEffect(() => {
    const fetchPosts = async () => {
      const {data} = await getAllPosts()
      setPosts(data.posts)
  }
  
    fetchPosts();
  }, [])


  //REFRESH------------------------------------------------------------------------------
  const navigate = useNavigate()
  function refresh() {
    navigate('/profile')
        setTimeout(() => navigate('/'), 0);
  }

  //SEARCH POSTS-------------------------------------------------------------------------
    const searchHandle = useCallback(
    (dataArr) => {
    //   console.log('search handle', dataArr, searchTerm);
      return [...dataArr].filter(post => {
        switch(dropdownValue) {
            case 'title':
                return post?.title.toLowerCase().indexOf(searchTerm?.toLowerCase()) !== -1;
            case 'price':
                return post?.price.toLowerCase().indexOf(searchTerm?.toLowerCase()) !== -1;
            case 'description':
                return post?.description.toLowerCase().indexOf(searchTerm?.toLowerCase()) !== -1;
            default:
                return post?.title.toLowerCase().indexOf(searchTerm?.toLowerCase()) !== -1;
          }
        
      });
  }, [searchTerm, dropdownValue]);

  
  useEffect(() => {
    setPostsCopy(searchHandle(posts));
  }, [posts, searchHandle, setPostsCopy]);

  console.log('HEREERE ', postsCopy)



  //Message----------------------------------------------------------------------------
  //Message - start msg
  const inquireMessage = (post) => {
    setPostId(post._id);
    setShowMsgBox(true);
    console.log('postid', postId);
}

  //Message - submit msg
  const submitMessage = async (event) => {
    event.preventDefault();
    try {
		const response = await fetch(`${config.apiLink}/${config.cohort}/posts/${postId}/messages`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`
			},
			body: JSON.stringify({
				message: {
					content: message
				}
			}),
		});
		const result = await response.json();
		console.log("message result", result);
		if (result.success) {
            setMessage(message);
        }
	} catch (error) {
        console.error(error);
	}
  }

  //Message - cancel msg
  const cancelMessage = () => {
    setShowMsgBox(false);
    setPostId(null);
  }



    return (
    <main>
        <h1>Posts</h1>
            <form className="searchContainer">
                <input type="text" id="searchBar" name="search-term" placeholder={`Search ${dropdownValue}...`} value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}></input>
                {/* <button type="submit" id="searchBtn">Submit</button> */}
                <select name="dropdown" id="cat-select" onChange={(e) => setDropDownValue(e.target.value)}>
                    <option value="title">Title</option>
                    <option value="description">Description</option>
                    <option value="price">Price</option>
                </select>
        </form>
        <br />
        <button onClick={refresh}>Reload Posts</button>
        <br />

        {/* After search, if no search value is found, then the array will be 0. Else it will display all of the posts */}
            {postsCopy.length === 0 ? 
                <div className='text-center'>No posts based on search</div>
             : 
            postsCopy.map(post => (
                <div key={post._id} className="postcontent">
                    <h3>{post.title}</h3>
                    <p className="realpostid"><b>Post ID:</b>{post._id}</p> {/* testing */}
                    <p><b>User:</b> {post.author.username}</p>
                    <p>{post.isAuthor}</p>
                    <br />
                    <p><b>Description:</b> <br />{post.description}</p>
                    <br />
                    <p><b>Location:</b> {post.location}</p>
                    <Fragment>
                    <span><b>Will Deliver:&nbsp;</b></span>
                    {post.willDeliver === true ? <span>Yes</span>
                    : <span>No</span>
                    }
                    <br />
                    <br />
                    <h3>Price: {post.price}</h3>
                    </Fragment>
                    <br />
                    <span className="createdate">
                    <span><b>Created:</b> {post.createdAt}</span>
                    <span><b>Updated:</b> {post.updatedAt}</span>
                    </span>
                    <br />
                    {
                    isSignedIn ?
                    <span className='modBtn'>
                        {/* <button type="button"
                            className="editBtn"
                            disabled={signedInName !== post.author.username}
                            onClick={() => setPostId(post.id) }>Edit</button> */}
                        <button type="button"
                            className="delBtn"
                            disabled={signedInName !== post.author.username}
                            onClick={() => handleDelete(post._id)}>Delete</button>
                            {!showMsgBox && (
                        <button type="button"
                            className="msgBtn"
                            disabled={signedInName === post.author.username}
                            onClick={() => {setPostId(post._id); inquireMessage(post)}}>Message</button>
                            )}
                            {postId === post._id && showMsgBox ? (
                                <form onSubmit={submitMessage} className='inqBtn'>
                                    <h3>Message</h3>
                                        <textarea 
                                            type='text' rows={4} cols={40}placeholder='Write a message...' className='message-box'
                                            onChange={event => setMessage(event.target.value)}/>
                                            <br />
                                    <span>
                                        <button className='sendMsg' type='submit'>Submit</button>
                                        <button className='cancelMsg' onClick={cancelMessage}>Cancel</button>
                                    </span>
                                </form>
                            ) : ''
                         }
                        </span>
                        : ''
                    }
                    <br />
                </div>))
            }
            <PostForm token={token} signedInName={signedInName} postsCopy={postsCopy} setPostsCopy={setPostsCopy} isSignedIn={isSignedIn} />
    </main>
    )
}

export default Posts;