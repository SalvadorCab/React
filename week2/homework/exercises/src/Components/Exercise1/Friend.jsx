import React, { useState, useEffect, useRef } from 'react';

import ButtonFriend from './Button';
import FriendProfile from './FriendProfile';

function Friend() {
    const URL = "https://www.randomuser.me/api?results=1";
    
    const isFirstRun = useRef(true);               // To avoid the first run. useEffect will run ONLY if the client 
                                                   // clicks the button
    const [error, setError] = useState(null);
    const [toggleSwitch, setToggleSwitch] = useState(false);
    const [friend, setFriend] = useState({      
        firstName: "",
        lastName: "",
        address: "",
        country: "",
        email: "",
        phoneNo: ""
     });
     
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
                setFriend({
                    firstName: `${apiData.results[0].name.first}`,
                    lastName: `${apiData.results[0].name.last}`,
                    address: `${apiData.results[0].location.street.name} ${apiData.results[0].location.street.number}, 
                            ${apiData.results[0].location.city}-${apiData.results[0].location.state}`,
                    country: `${apiData.results[0].location.country}`,
                    email: `${apiData.results[0].email}`,
                    phoneNo: `${apiData.results[0].phone}`
                });
            })
            .catch(err => {
                setError(err.message);
            })
    }, [toggleSwitch]); 
    
    const getFriend = () => {
        setToggleSwitch({ toggleSwitch: !toggleSwitch });
    }

    if(error)
        return(
            <div>
                <p>{ error }!</p>
                <ButtonFriend getFriend={ getFriend }/>
            </div>
        )
    else
        return (
            <div>
                <FriendProfile friendInfo = { friend }/>
                <ButtonFriend getFriend={ getFriend }/>
            </div>
    )
}

export default Friend;

