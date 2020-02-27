import React from 'react';
import { ListOfPosts } from '../ListOfPosts';

//amend this to be the name of the first item in the json response
// const apiData = FetchApiData;

//iterate through data add each post item to a list
export function PostsPage(props) { 
    // const postsImages = [];

    // for (let i=0; i = apiData.length; i++) {
    //     const allData = apiData[i];
    //     const item = allData.items[0];
    //     console.log(item)
    //     //posts.push(data);
    // }
    
    return (
        <main>
            <h2>PostsPage</h2>
            <ListOfPosts/>
        </main>

    //    <ul className="all-posts">
    //         <li className="posts-container">
    //             <div className="post">
    //                 <img className="post-image"/>
                  
    //             </div>
    //         </li>
    //     </ul>
    
    );
}
