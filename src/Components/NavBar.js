import { BiMessage, BiDotsVerticalRounded } from "react-icons/bi";
import { IoIosNotificationsOff } from "react-icons/io"
import zainab from '../images/zainab.jpg'
import NavChat from "./NavChat";

export default function NavBar(props) {

  var mystyle = require('../MainStyles');
  const barStyle = mystyle.barStyle;
  const imgStyle = mystyle.imgStyle;
  const iconStyle = mystyle.iconStyle;
  const notbarIcon = mystyle.notbarIcon;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

      <div style={barStyle}>
        <img src={zainab} alt='profile picture' style={imgStyle}></img>
        <BiMessage style={{ ...iconStyle, marginLeft: '40%' }}></BiMessage>
        <BiDotsVerticalRounded style={{ ...iconStyle }}></BiDotsVerticalRounded>
      </div>

      <div style={mystyle.notBar}>
        <IoIosNotificationsOff style={notbarIcon}></IoIosNotificationsOff>
        <div style={{ flex: 4, color: 'black', height: 'inherit', textAlign: 'start', padding: '10px' }}>
          <p style={{ fontSize: '17px' }}>Get notified of new messages</p>
          <p style={{ fontSize: '14px' }}>Turn on Desktop notifications</p>
        </div>
      </div>

      <div style={{ width: '100%', flex: 10 ,flexDirection: 'column'}}>
        <NavChat style ={{flex:1, width:'inherit', height:'40px',backgroundColor: 'red'}}></NavChat>
        <div style ={{flex:8}}></div>
      </div>

    </div>

  )
}