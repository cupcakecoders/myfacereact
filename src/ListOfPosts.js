import React, { useState, useEffect } from 'react';
import { Post } from './Post/Post';

export function ListOfPosts() {

    const [posts, setPosts] = useState();

    useEffect(() => {
        fetch("https://localhost:5001/posts")
            .then(response => response.json())
            .then(data => setPosts(data.items));
     }, []);

     if (!posts) {
         return <div>Loading api data</div>
     }

     const postHtmlElements = [];
     posts.forEach(postData => {
            const post = <Post data={postData}/>
            postHtmlElements.push(post);
     });

     return (
         <ul>
             {/* {posts.map(postData => <Post data={postData}/>)} */}
             {postHtmlElements}
         </ul>
     )

};