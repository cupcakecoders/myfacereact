import React from 'react';

export function Post(props) {
    console.log(props)
    return (
    <ul>
        <li className="post-container">
            <img className="post-image" src={props.data.imageUrl}/>
            <h3>{props.data.postedBy.displayName}</h3>
            <p>{props.data.message}</p>
        </li>
    </ul>
    );
};
