import { useState } from "react";
const Message = (props) => {

    const userID = 1;
    const styles = require('./styles/chatStyles');
    const style = props.id === userID ? styles.sentmsg: styles.receivemsg;
    
    return ( 
    <div style={style}>
        {props.content}
    </div>
     );
}
 
export default Message;