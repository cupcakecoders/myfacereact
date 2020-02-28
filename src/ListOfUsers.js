import React, { useState, useEffect } from 'react';
import { User } from './User/User';

export function ListOfUsers() {

    const [users, setUsers] = useState();

    useEffect(() => {
        fetch("https://localhost:5001/users")
            .then(response => response.json())
            .then(data => setUsers(data.items));
     }, []);

     if (!users) {
         return <div>Loading api data</div>
     }

    return (
         <ul>
             {users.map(userData => <User data={userData}/>)}}
         </ul>
     )

};