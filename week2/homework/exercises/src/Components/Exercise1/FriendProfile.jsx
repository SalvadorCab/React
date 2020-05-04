import React from 'react';

function FriendProfile(props) {
    const {firstName, lastName, address, country, email, phoneNo} = props.friendInfo;

    return (
        <div>
            <ul className="friend">
                <li>Name: <span>{firstName} {lastName}</span></li>
                <li>Address: <span>{address}</span></li>
                <li>Country: <span>{country}</span></li>
                <li>Email: <span>{email}</span></li>
                <li>Phone: <span>{phoneNo}</span></li>
            </ul>
        </div>
    )
}

export default FriendProfile;
