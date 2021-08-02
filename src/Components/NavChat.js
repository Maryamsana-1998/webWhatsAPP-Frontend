import React from 'react';
import picture from '../images/picture.jpg';


const NavChat = () => {
    var mystyle = require('../MainStyles');

    return (
        <div style={{ display: 'flex', flexDirection: 'row', width: 'inherit', height: '65px', backgroundColor: '#ededed' }}>
            <div style={{ flex: 1 }}>
                <img src={picture} alt="contact picture " style={{ ...mystyle.imgStyle }}></img>
            </div>

            <div style={{ flex: 3 }}>
                <p style={{ ...mystyle.contactStyle }}>Maryam</p>
            </div>

            <div style={{ flex: 1 }}>
                <p style={mystyle.lastseenStyle}>23/3/2019</p>
            </div>

        </div>
    );
}

export default NavChat;