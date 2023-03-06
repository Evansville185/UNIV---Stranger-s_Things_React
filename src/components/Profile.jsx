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

    return (
        <div>
            <h1 className="profile">Profile</h1>
            <h2>Username: {signedInName}</h2>
            <h2>Location: </h2>
            <h1 className="messages">Messages</h1>
            <main>
                <h3>Messages</h3>
                {receivedPosts.map((post, i) => (
                    <div key={`${post._id}-${i+1}`}>
                    <h3>Title:{post.title}</h3>
                    <p><b>Description:</b> <br />{post.description}</p>
                    <br />
                    {post?.messages.map(message => (
                        <Fragment key={message._id}>
                        <div>
                        <p className="realpostid"><b>Post ID:</b> {message._id}</p>
                        <p><b>post From:</b> {message.fromUser.username}</p>
                        <p className='profileMsg'>{message.content}</p>
                        </div>
                        </Fragment>
                    ))}
                    </div>
                ))}
            </main>
        </div>
    )
}

export default Message;

//post.id-1
//GETTING the key prop error again...