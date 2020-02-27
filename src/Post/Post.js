import React from 'react';
import './Post.scss';


export function Post(props) {
    console.log(props)
    return (
    <ul>
        <li post-style="true" className="post">
            <img post-style="true" className="post-image" alt="users favorite scenes" src={props.data.imageUrl}/>
            <h3 post-style="true">{props.data.postedBy.displayName}</h3>
            <p post-style="true">{props.data.message}</p>
        </li>
    </ul>
    );
};
