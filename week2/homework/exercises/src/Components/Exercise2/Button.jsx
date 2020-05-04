import React from 'react';

function Button(props) {
    return (
        <div>
            <button onClick = { props.getDogPhoto } >Get a Dog!</button> 
        </div>
    )
}

export default Button;