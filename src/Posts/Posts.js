import React from 'react';
import { FetchApiData } from '../apiData';


//amend this to be the name of the first item in the json response
const apiData = FetchApiData;

//iterate through data add each post item to a list
function IterateData() { 
    const posts = [];

    for (let i=0; i = apiData.length; i++) {
        const data = apiData[i];
        posts.push(data);
    }
    
    console.log(posts);

    return (
        <div>
            <ul>
                {posts}
            </ul>
        </div>

    );
}

export const data = IterateData()

