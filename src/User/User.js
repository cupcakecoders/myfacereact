import React from 'react';

export function User(props) {
    console.log(props)
    return (
    <div>
    <ul>
        <li>
            <h3>{props.data.displayName}</h3>
            <img src={props.data.profileImageUrl}/>
        </li>
    </ul>
    </div>
    );
};
