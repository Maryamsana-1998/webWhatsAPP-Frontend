import zainab from '../images/zainab.jpg'
import { BiMessage, BiDotsVerticalRounded } from "react-icons/bi";

const Navprofile = (props) => {
    const mystyle =require('../MainStyles');
    const msgstyle = require('./styles/NavbarStyles');
    return (
        <>
        <img src={zainab} alt='profile picture' style={mystyle.imgStyle}></img>

        <BiMessage style={{ ...mystyle.iconStyle, marginLeft: '40%' }}></BiMessage>

        <button style = {msgstyle.buttonStyle} onClick={props.click}>
        <BiDotsVerticalRounded style={msgstyle.notIcon }></BiDotsVerticalRounded>   
        </button>
      
        </>
      );
}
 
export default Navprofile;