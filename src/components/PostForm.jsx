import React, { useState } from 'react';
import { config } from '../config';

const PostForm = ( {posts, setPosts} ) => {

    const [title, setTitle] = useState([]); 
    const [description, setDescription] = useState([]);
    const [location, setLocation] = useState([]);
    const [price, setPrice] = useState([]);
    const [willDeliver, setWillDeliver] = useState(false);


    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch (`${config.apiLink}/${config.cohort}/posts`, {
            method: "POST",
            header: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                description,
                location,
                price,
                willDeliver,
            }),
        });
        const data = await response.json();
        console.log("data", data);
        setPosts([data, ...posts]);
        setTitle("");
        setDescription("");
        setLocation("");
        setPrice("");
        setWillDeliver(false);
    }
    
    return (
    <aside>
        <h2>Create Post</h2>
        <br></br>
            <form onSubmit={handleSubmit} className="postFormContainer">
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
                    onchange={(event) => setWillDeliver(event.target.checked)}></input>
                    <span class="chekboxText">Willing to Deliver?</span>
                </label>
                <button type="submit" id="pfBtn">Create</button>
            </form>

            <p>create new post form</p>
            <p>create search bar within post</p>
            <p>fill out a new post form</p>
            <p>submit it</p>
            <p>appears over where content is to the left</p>
            <p>have an edit option</p>
            <p>have a delete option</p>
    </aside>
    )
}

export default PostForm;