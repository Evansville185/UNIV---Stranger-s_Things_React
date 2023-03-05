import React, { useEffect, useState } from 'react';
import { userMessages } from '../api'
// import { config } from "../config";


// change name
function Message({signedInName, token}) {
    const [receivedMessages, setReceivedMessages] = useState([]);

useEffect(() => {
    const fetchMessages = async ()  => {
    const {data} = await userMessages(token);
    setReceivedMessages(data.messages)
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
                {receivedMessages.map(message => (
                    <div key={message._id} >
                    <h3>{message.post.title}</h3>
                    <p className="realpostid"><b>Post ID:</b> {message.post._id}</p>
                    <p><b>Description:</b> <br />{message.description}</p>
                    <br />
                    <p><b>Message From:</b> {message.fromUser.username}</p>
                    <p>{message.content}</p>
                    </div>
                ))}
            </main>
        </div>
    )
}

export default Message;