import Box from '@material-ui/core/Box';
import { FaMediumM } from "react-icons/fa";
import logo192 from './images/logo192.png'
import picture from './images/picture.jpg'
import MessageBar from './MessageBar';


function Chat() {
  const pict = require('./images/logo192.png');
  return (
    <>
      < Box
        width='75%'
        height='inherit'
        display='flex'
        position='absolute'
        backgroundColor='rgb(229, 221, 213)'
        align-self='end'
      >
        <div style={{ width: '100%',
         position: 'absolute',
         backgroundColor: '#ededed',
         borderStyle: 'solid',
         borderColor: '#0000000d',
         height: '58px',
         textAlign: 'left',
         }}>
           <img src={picture} alt="hello" style={{ position: 'absolute', 
             borderRadius: '20px', 
             height: "40px", 
             borderStyle: "solid",
             borderColor: '#00800017',
             marginTop: '5px',
             marginLeft:'10px' }} ></img>
            <div style ={{display:'flex', flexDirection:'column',marginLeft : '70px',marginTop :'15px', height:'inherit' ,width: '30%',alignSelf:'center'}}>Contact Name</div>
        </div>
        <div className='EndBar' style ={{ width: '100%',
          position: 'absolute',
          backgroundColor: '#ededed',
          borderStyle: 'solid',
          borderColor: '#0000000d',
          height: '58px',
          textAlign: 'left',
          bottom: '0px'}}>
          <MessageBar></MessageBar>
        </div>
      </Box>
    </>
  );
}

export default Chat;