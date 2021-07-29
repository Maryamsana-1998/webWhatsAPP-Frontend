import { BiMessage,BiDotsVerticalRounded } from "react-icons/bi";
import {IoIosNotificationsOff} from "react-icons/io"
import zainab from './images/zainab.jpg'

export default function NavBar() {
  
  var mystyle = require('./MainStyles');
  const barStyle = mystyle.barStyle;
  const imgStyle = mystyle.imgStyle;
  const notBar =mystyle.notBar;
  const iconStyle = mystyle.iconStyle;
  const notIcon = mystyle.notIcon;
  const textStyle = mystyle.textStyle;
  return (

    <div style={{ display: 'flex', position: 'absolute', height: 'inherit', backgroundColor: '#f3f3f3', width: '25%' }}>
      <div style={{...barStyle}}>
        <img src={zainab} alt="hello" style={imgStyle } ></img>
        <BiMessage style={{marginLeft: '75%', marginTop:'15px',...iconStyle}}>
        </BiMessage>
        <BiDotsVerticalRounded style ={{ marginTop:'13px',marginLeft:'87%',...iconStyle}}>
        </BiDotsVerticalRounded>
      </div>

      <div style={{...notBar}}>
      <IoIosNotificationsOff style={notIcon}></IoIosNotificationsOff>
      <p style={{...textStyle,bottom :'40px'}}> Get Notifications of New messages</p>
      <p style ={{...textStyle,fontSize:'13px',bottom:'20px'}}>Turn on desktop Notifications</p>
      </div>
    </div>
  );
}