import { useState } from "react";
const Message = (props) => {

    const userID = 1;
    const receivemsg = {width :'150px', height: '40px',backgroundColor :'#dcf8c6',margin:'10px',alignSelf:'start'};
    const sentmsg = {width :'150px', height: '40px',backgroundColor :'rgb(237 237 237)',margin:'10px',alignSelf:'end'}
    const style = props.id === userID ? sentmsg:receivemsg;
    
    return ( 
    <div style={style}>
        {props.content}
    </div>
     );
}
 
export default Message;