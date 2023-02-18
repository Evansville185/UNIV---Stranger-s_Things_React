// import {getAllPosts} from '../api'
// import React, { useState, useEffect } from 'react';


// const Posts = () => {

//     const [posts, setPosts] = useState([]);
  
//   useEffect(() => {
//     const fetchPosts = async () => {
//       const {data} = await getAllPosts()
//       setPosts(data.posts)
//   }
  
//     fetchPosts();
//   }, [])

//     return (
//     <div className="contentContainer">
//             <h1>Posts</h1>
//         {
//         posts.map(post => (
//             <div key={post.id}>
//                 <h3>{post.title}</h3>
//                 <p>{post.description}</p>
//                 <h4>{post.price}</h4>              
//             </div>))
//         }          
//     </div>
//     )
// }

// export default Posts;