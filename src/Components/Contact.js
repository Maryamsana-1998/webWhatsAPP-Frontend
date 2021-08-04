import picture from '../images/picture.jpg';
import { BiDotsVerticalRounded } from "react-icons/bi";
import React from 'react';

const Contact = (props) => {
    mystyle = require('../MainStyles');
    return (
        <>
            <div style={{ flex: 1 }}>
                <img src={picture} alt="contact picture " style={mystyle.imgStyle}></img>
            </div>

            <div style={{ flex: 13 }}>
                <p style={mystyle.contactStyle}>{props.name}</p>
                <p style={mystyle.lastseenStyle}>{props.lastseen}</p>
            </div>

            <div style={{ flex: 1 }}>
                <BiDotsVerticalRounded style={mystyle.iconStyle}></BiDotsVerticalRounded>
            </div>
        </>
    );
}
 
export default Contact;
