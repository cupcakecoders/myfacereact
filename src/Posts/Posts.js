import React from 'react';
import {ApiData} from './apiData.js';


//amend this to be the name of the first item in the json response
const apiData = ApiData;

//iterate through data add each post item to a list
function IterateData() { 
    const posts = [];

    for (let i=0; i = apiData.length; i++) {
        const data = apiData[i];
        posts.push(data);
    }
}

Console.log(ApiData);

export const ListOfPosts = posts();

