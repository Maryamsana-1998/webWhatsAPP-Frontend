import React from 'react';
import picture from '../images/picture.jpg';


const NavChat = (props) => {
    var mystyle = require('../MainStyles');
    const name = props.name;
    const lastseen =props.lastseen;

    return (
        <div style ={mystyle.navChatStyle}>
            <div style={{ flex: 1 }}>
                <img src={picture} alt="contact picture " style={{ ...mystyle.imgStyle }}></img>
            </div>

            <div style={{ flex: 3 }}>
                <p style={{ ...mystyle.contactStyle }}>{name}</p>
            </div>

            <div style={{ flex: 1 }}>
                <p style={mystyle.lastseenStyle}>{lastseen.slice(11,19)}</p>
            </div>

        </div>
    );
}

export default NavChat;