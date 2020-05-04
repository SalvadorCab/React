import React from 'react';

function DogPhoto(props) {
    return (
        <div className="pictures">
                { props.photosArray.map(url => (
                        <img src={url} alt="Dog"/>
                )) }
        </div>
    )
}

export default DogPhoto;
