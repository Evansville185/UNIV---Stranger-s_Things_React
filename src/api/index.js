import { config } from "../config";
// import React, { useState } from 'react';

// export const getAllPosts = async ({token}) => {
//     try {
//         const response = await fetch (`${config.apiLink}/${config.cohort}/posts`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${localStorage.getItem('token')}`
//             },
//         });
//         const data = await response.json();
//         return data
//     } catch (error) {
//         console.error(error);
//     }
// }

export const getAllPosts = async () => {
	try {
		const response = await fetch(`${config.apiLink}/${config.cohort}/posts`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};

// export async function sendUserMessage(postId, message, { token }) {
// 	try {
// 		const response = fetch(`${config.apiLink}/${config.cohort}${postId}/messages`, {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json",
// 				Authorization: `Bearer ${token}`,
// 			},
// 			body: JSON.stringify({
// 				message: {
// 					content: message,
// 				},
// 			}),
// 		});
// 		const result = await response.json();
// 		console.log(result);
// 		return result;
// 		// setMessage(message);
// 	} catch (error) {
// 		console.error(error);
// 	}
// }


export const userMessages = async (token) => {
	try {
		const response = await fetch(`${config.apiLink}/${config.cohort}/users/me`, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
		});
		const result = await response.json();
		console.log(result);
		return result;
	} catch (error) {
		console.error(error);
	}
}

// export const getUserPosts = async () => {
//     try {
//         const response = await fetch(`${config.apiLink}/${config.cohort}/users/me`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${localStorage.getItem('token')}`,
//             },
//         });
//         const data = await response.json();
//         return data;
//         } catch(error) {
//         console.error(error);
//     }
// }

//     export const UpdatePost = ({posts, setPosts, setPostsId}) => {
//         const [title, setTitle] = useState([]);
//         const [body, setBody] = useState([]);
//         const [postId, setPostId] = useState(null);

//         // const handleSubmit = async () => {

//         const response = /*await*/ fetch(`${config.apiLink}/${config.cohort}/posts/postId`, {
//             method: "PATCH",
//             headers: {
//                 'Content-Type': 'application/json',
//                 //Authorization: bearer token string here
//             },
//             body: JSON.stringify({
//                 title,
//                 // description,
//                 // price,
//                 // location,
//                 // willDeliver,
//             }),
//         });
//         const data = /*await*/ response.json();
//         //need to figure out which post it is inside post state  and replace just that one. in order to update the state, you need to update the ui because we know
// 		//we've updated the data, we now need to update the ui
//         if (data && data.title) {
//             //checking if the response has data and has a title
// 			//creating a new post array because posts.map will return a new array. will map through all posts currently on state
//         const newPosts = posts.map(post => {
//             //if current post in array is the same postId passed in, we want to, not just return original post in current state, but we want to return updated version
//             if(post.id === postId) {
//             return data;
//             } else {
//                 return post;
//             }
//         });
//         setPosts(newPosts);
//         setTitle("");
//         setBody("");
// 		//need to clear postId to prevent from same update form, we only want to show update form with correct postId
//         setPostsId(null);
//         }
//     }
