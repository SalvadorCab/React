import React, { useState, useEffect, useRef } from 'react';

import DogPhoto from './DogPhoto';
import Button from './Button';

function DogGallery() {
    const URL = "https://dog.ceo/api/breeds/image/random";
    
    const isFirstRun = useRef(true);               // To avoid the first run. useEffect will run ONLY if the client 
                                                   // clicks the button
    const [error, setError] = useState(null);
    const [toggleSwitch, setToggleSwitch] = useState(false);
    const[dogPhotos, setDogPhotos] = useState([]);
     
    useEffect(() => {
        if (isFirstRun.current) {          // This if just checks the first render and skips it fom the fetch
            isFirstRun.current = false;
            return;
        }

        fetch(URL)
            .then(res => {
                if (res.ok)
                    return res.json();
                else
                    throw Error("Error fetching api");
            })
            .then(apiData => {
                setDogPhotos(dogPhotos.concat(apiData.message));
            })
            .catch(err => {
                setError(err.message);
            })
    }, [toggleSwitch]); 
    
    const getDogPhoto = () => {
        setToggleSwitch({ toggleSwitch: !toggleSwitch });
    }

    if(error)
        return(
            <div>
                <p>{ error }!</p>
                <Button getDogPhoto={ getDogPhoto }/>
            </div>
        )
    else if( dogPhotos.length < 1)
        return(
            <div>
                <p>Get your first dog by clicking the button!</p>
                <Button getDogPhoto={getDogPhoto} />
            </div>
        )
    else
        return (
            <div>
                <DogPhoto photosArray = { dogPhotos }/>
                <Button getDogPhoto={ getDogPhoto }/>
            </div>
    )
}

export default DogGallery;
