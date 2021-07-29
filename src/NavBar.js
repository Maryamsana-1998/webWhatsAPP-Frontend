import { BiMessage,BiDotsVerticalRounded } from "react-icons/bi";
import {IoIosNotificationsOff} from "react-icons/io"
import zainab from './images/zainab.jpg'

export default function NavBar() {

  let barStyle = {width: '100%', position: 'absolute',
  borderStyle: 'solid', borderColor: '#0000000d'
  };

  let textStyle ={position:'absolute',
  display:'flex', direction:'column'
  };
  
  let imgStyle ={ borderRadius:'20px',width:'40px', height: "40px"};

  return (

    <div style={{ display: 'flex', position: 'absolute', height: 'inherit', backgroundColor: '#f3f3f3', width: '25%' }}>
      <div style={{width: '100%', height: '58px', backgroundColor: '#ededed',...barStyle}}>
        <img src={zainab} alt="hello" style={{...barStyle,...imgStyle, marginTop: '5px', marginLeft: '8px' }} ></img>
        <BiMessage style={{color :'grey', marginLeft: '75%', marginTop:'15px',width:'22px',height:'22px'}}>
        </BiMessage>
        <BiDotsVerticalRounded style ={{color :'grey', marginTop:'17px',width:'25px',height:'25px'}}>
        </BiDotsVerticalRounded>
      </div>

      <div style={{...barStyle,
        backgroundColor: 'rgb(157,225,254)',
        height: '100px',
        textAlign: 'left',
        marginTop: '58px',
      }}>
      <IoIosNotificationsOff style={{color:'rgb(157,225,254)',
      backgroundColor:'white', 
      width:'25px', height:'25px',
      borderRadius:'30px',
      marginTop:'30px', marginLeft:'7%'}}></IoIosNotificationsOff>
      <p style={{...textStyle,bottom :'10px', left:'30px'}}> Get Notifications of New messages</p>
      </div>
    </div>
  );
}