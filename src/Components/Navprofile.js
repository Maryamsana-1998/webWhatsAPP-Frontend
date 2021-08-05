import zainab from '../images/zainab.jpg'
import { BiMessage, BiDotsVerticalRounded } from "react-icons/bi";
import SettingBar from './SettingBar';

const Navprofile = (props) => {
  const mystyle = require('../MainStyles');
  const msgstyle = require('./styles/NavbarStyles');

  const handleClick = () => {
    console.log('button clicked')
    var x = document.getElementById("myDropdown");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  return (
    <>
      <img src={zainab} alt='profile picture' style={mystyle.imgStyle}></img>

      <div style={{ flex: 1 }}></div>

      <BiMessage style={{ ...mystyle.iconStyle }}></BiMessage>

      <div style={{ height: '100%', width: '50px', display: 'flex', flexDirection: 'column' }}>
        <button id = 'settingbutton' style={{ ...msgstyle.buttonStyle}} onClick={handleClick}>
          <BiDotsVerticalRounded style={mystyle.iconStyle}></BiDotsVerticalRounded>
        </button>
        <div class="dropdown-content" id="myDropdown" style={msgstyle.settingbar} >
          <SettingBar></SettingBar>
        </div>
      </div>
    </>
  );
}

export default Navprofile;