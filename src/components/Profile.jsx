import React, { useEffect, useState, Fragment } from 'react';
import { userMessages } from '../api'

function Message({signedInName, token}) {
    const [receivedPosts, setReceivedPosts] = useState([]);

useEffect(() => {
    const fetchMessages = async ()  => {
    const {data} = await userMessages(token);
    setReceivedPosts(data.posts)
    }
    fetchMessages();
}, [token])

const postCount = receivedPosts.length;

    return (
        <main>
            <h1 className="profile">Profile</h1>
            <div>
                <h2>Username: {signedInName}</h2>
                <h3>Posts created: {postCount} posts</h3>
            </div>
            <main className='messageContainer'>
            <h1 className="messages">Messages</h1>
                {receivedPosts.map((post, i) => (
                    <div key={`${post._id}-${i+1}`}>
                    <p><b>Title:&nbsp;</b>{post.title}</p>
                    <p className="realpostid"><b>Post ID:&nbsp;</b> {post._id}</p>
                    <br />
                    <p><b>Description:</b> <br />{post.description}</p>
                    <br />
                {post?.messages.length > 0 ? (
                    post?.messages.map(message => (
                        <Fragment key={message._id}>
                        <div>
                        <p><b>From:</b> {message.fromUser.username}</p>
                        <p className='profileMsg'>{message.content}</p>
                        </div>
                        </Fragment>
                    ))
                ) : (
                    <p>No messages for this post</p>
                    )}
                    </div>
                ))}
            </main>
        </main>
    )
}

export default Message;