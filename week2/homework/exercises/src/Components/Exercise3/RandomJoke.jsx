import React, { useState, useEffect } from 'react';

import Joke from './Joke';

function RandomJoke() {
    const URL = "https://official-joke-api.appspot.com/random_joke";

    const [error, setError] = useState(null);
    const [joke, setJoke] = useState({ setup: "", punchline: "" });

    useEffect(() => {

        fetch(URL)
            .then(res => {
                if (res.ok)
                    return res.json();
                else
                    throw Error("Error fetching api");
            })
            .then(apiData => {
                setJoke({
                    setup: `${apiData.setup}`,
                    punchline: `${apiData.punchline}`,
                });
            })
            .catch(err => {
                setError(err.message);
            })
    }, []); 

    if(error)
    return(
            <p>{ error }!</p>
        )
    else
    return (
        <Joke joke={joke} />
    )
}

export default RandomJoke;
