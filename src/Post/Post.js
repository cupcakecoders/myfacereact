import React from 'react';

export function Post(props) {
    console.log(props)
    return <div>{props.data.message}</div>
}