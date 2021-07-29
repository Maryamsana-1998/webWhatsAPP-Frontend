import Box from '@material-ui/core/Box';
import { FaMediumM } from "react-icons/fa";
import logo192 from './images/logo192.png'
import picture from './images/picture.jpg'
import MessageBar from './MessageBar';

function Chat() {
  const pict = require('./images/logo192.png');
  var mystyle = require('./MainStyles');
  var imgStyle = mystyle.imgStyle;
  const barStyle = mystyle.barStyle;
  const contactStyle =mystyle.contactStyle;
  return (
    <>  
      < Box
        width='64.7%'
        height='inherit'
        display='flex'
        position='absolute'
        backgroundColor='rgb(229, 221, 213)'
        align-self='end'
        marginLeft='25%'
      >
        <div className='Bar' style={{...barStyle}}>
           <img src={picture} alt="hello" style={imgStyle} ></img>
            <div style ={contactStyle}>Maryam </div>
        </div>
        <div className='Bar' style ={{...barStyle, bottom: '0px'}}>
          <MessageBar></MessageBar>
        </div>
      </Box>
    </>
  );
}

export default Chat;