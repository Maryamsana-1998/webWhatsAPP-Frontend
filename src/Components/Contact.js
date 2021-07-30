import picture from '../images/picture.jpg';
import { BiDotsVerticalRounded } from "react-icons/bi";


function Contact() {
    var mystyle = require('../MainStyles');
    const name = 'Maryam';

    return (
        <>
            <div style={{ flex: 1 }}>
                <img src={picture} alt="contact picture " style={{ ...mystyle.imgStyle }}></img>
            </div>

            <div style={{ flex: 13 }}>
                <p style={{ ...mystyle.contactStyle }}>{name}</p>
                <p style={mystyle.lastseenStyle}>23/3/2019</p>

            </div>

            <div style={{ flex: 1 }}>
                <BiDotsVerticalRounded style={mystyle.iconStyle}></BiDotsVerticalRounded>
            </div>
        </>
    )
}

export default Contact;
