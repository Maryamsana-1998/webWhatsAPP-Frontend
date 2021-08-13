import picture from '../images/picture.jpg';
import { BiDotsVerticalRounded } from "react-icons/bi";
import React from 'react';

const Contact = (props) => {
    const mystyle = require('../MainStyles');
    return (
        <>
            <img src={picture} alt="contact picture " style={mystyle.imgStyle}></img>

            <div style={{ flex: 1 }}>
                <p style={mystyle.contactStyle}>{props.name}</p>
                <p style={mystyle.lastseenStyle}>{props.lastseen}</p>
            </div>

            <BiDotsVerticalRounded style={mystyle.iconStyle}></BiDotsVerticalRounded>
        </>
    );
}

export default Contact;
