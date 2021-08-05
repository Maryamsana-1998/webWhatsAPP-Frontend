import Navprofile from './Navprofile';
import { IoIosNotificationsOff } from "react-icons/io"
import {connect} from 'react-redux';


const Navsub = (props) => {
    const mystyle = require('../MainStyles');
    const navstyle = require('./styles/NavbarStyles');


    const handleSettingbar =()=>{
        console.log('settings clicked');
        props.settingClick(!props.display);     
    }

    return (
        <>
            <div style={mystyle.barStyle}>
                <Navprofile click = {handleSettingbar}></Navprofile>
            </div>

            <div style={mystyle.notBar}>
        
                <IoIosNotificationsOff style={mystyle.notbarIcon}></IoIosNotificationsOff>
                <div style={navstyle.txtbox}>
                    <p style={{ fontSize: '17px' }}>Get notified of new messages</p>
                    <p style={{ fontSize: '14px' }}>Turn on Desktop notifications</p>
                </div>

            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
      display: state.settings
    }
  }
const mapDispatchToProps = (dispatch) => {
  return {
    settingClick:(value) => {
      dispatch( {type :'DISPLAY_SETTINGS', value :value } )
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Navsub);