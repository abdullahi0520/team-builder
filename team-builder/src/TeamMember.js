import React from 'react';


export default function Members(props) {
    const { details } = props

    if (!details){
        return <h2>Team Member Information Loading...</h2>
    }

    return (
        <div className='member container'>
            <h2>{details.username}</h2>
            <p>{details.email}</p>
            <p>{details.role}</p>
        </div>
    )
}