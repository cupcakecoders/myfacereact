import React, { useState, useEffect } from 'react';

export function FetchApiData() {

    const [apiData, setApiData] = useState();

    useEffect(() => {
        fetch("https://localhost:5001/posts")
        .then(response => response.json())
        .then(data => setApiData(data));
     }, []);

     if (!apiData) {
         return <div>Loading api data</div>
     }
     return (
         <div>{JSON.stringify(apiData)}</div>
     )

};