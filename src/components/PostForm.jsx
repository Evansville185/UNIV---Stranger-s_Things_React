import React, { useState } from 'react';
import { config } from '../config';
import { useNavigate } from 'react-router-dom'
// import { Message } from '../components'


const PostForm = ({ token, isSignedIn }) => {
    
    const [title, setTitle] = useState(''); 
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);
    const [created, isCreated] = useState(false);
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
 


//Create Post
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch(`${config.apiLink}/${config.cohort}/posts`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    post: {
                    title: title,
                    description: description,
                    location: location,
                    price: price,
                    willDeliver: willDeliver,
                    }
                })
            });
            const result = await response.json();

            console.log(result);
            setPosts(result);
            console.log("is this a valid token:", token);
            // setPosts([result, ...posts]);
            isCreated(true);
            setTitle('');
            setDescription('');
            setLocation('');
            setPrice('');
            setWillDeliver(false);
            if(!token) {
                alert('Please register or sign in to create a post')
                isCreated(false);
            } else {
                setTimeout(() => {
                    isCreated(false); 
                    navigate('/profile');
                    }, 5000);
                }
            } catch(error) {
                console.error(error)
            }
        } 

  //Message
//   const submitMessage = async (event) => {
//     event.preventDefault();
//     try{
//         const response = await fetch(`${config.apiLink}/${config.cohort}/posts`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'applicatoin/json',
//                 'Authorization': `Bearer ${token}`
//             },
//             body: JSON.stringify({
//                 message: {
//                     // content: {msgContent}
//                 }
//             })
//         });
//         const result = await response.json();
//         console.log(result);
//         // setOpenMsg(true);
//         return result;
//     } catch (error) {
//         console.error(error);
//     }
// }




        // useEffect(() => {
        //     if(isCreated) {
        //         setPostsCopy(...posts);
        //     }
        // }, [posts, isCreated, setPostsCopy])

    
    return (
        
    <aside>
           <form onSubmit={handleSubmit} className="pfContainer">
            {isSignedIn ? <>
                <h2>Create Post</h2>
                <input type="text" id="pfTitle" name="pfTitle" placeholder="Title" required
                onChange={(event) => setTitle(event.target.value)}></input>

                <input type="text" id="pfDescription" name="pfDescription" placeholder="Description" required
                onChange={(event) => setDescription(event.target.value)}></input>

                <input type="text" id="pfLocation" name="pftLocation" placeholder="Location" required
                onChange={(event) => setLocation(event.target.value)}></input>

                <input type="text" id="pfPrice" name="pfPrice" placeholder="Price" required
                onChange={(event) => setPrice(event.target.value)}></input>

                <label className="checkbox-label">
                    <input type="checkbox" id="postDeliver"
                    checked={willDeliver}
                    onChange={(event) => setWillDeliver(event.target.checked)}></input>
                    <span className="chekboxText">Willing to Deliver?</span>
                </label>
                <button type="submit" id="pfBtn">Create</button>
                <br />
                {
                    created ?
                    <span>
                        <h2>Post Created!</h2>
                        <p>Refreshing posts...</p>
                    </span>
                      : ''
                    }
                    
                </> : <p>Please sign in to create a post</p>
                }
            </form>
    </aside>
    )
}

export default PostForm;