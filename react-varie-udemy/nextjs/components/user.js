import React from 'react';

const user = (props) => (
    <div>
        <h1>{props.name}</h1>
        <p>{props.age}</p>
        <style jsx>
            {`
                p {
                    color: blue
                }
            `}
        </style>
    </div>
)

export default user;