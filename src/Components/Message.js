import { useState } from "react";
const Message = (props) => {
    
    return ( 
    <div style={{width :'150px', height: '40px',backgroundColor :'#dcf8c6',margin:'10px',alignSelf:'end'}}>
        {props.content}
    </div>
     );
}
 
export default Message;