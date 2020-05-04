import React from 'react';

function Button(props) {
    return (
        <div>
            <button onClick = { props.getFriend } >Get a Friend!</button> 
        </div>
    )
}

export default Button;
