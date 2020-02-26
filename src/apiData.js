import React, { useState, useEffect } from 'react';

/*function MyComponent(props) {
    const [name, setName] = useState(["Mike"]);

    useEffect(() => {
        fetch("https://my-api/get-data")
            .then(response => response.json())
            .then(jsonResponse => setName(jsonResponse));
    }, [])

    
    return <div>Hello {name}</div>
}*/

export function FetchApiData() {

    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        fetch("https://localhost:5001/posts").then(response => setApiData(response.json));
     }, []);

     if (!apiData) {
         return <div>Loading api data</div>
     }
     return (
         <div>{apiData}</div>
     )

};