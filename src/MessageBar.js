import { ImAttachment } from "react-icons/im";
import { GrEmoji } from "react-icons/gr";

export default function MessageBar(){
  var mystyle = require('./MainStyles');
  const iconStyle = mystyle.iconStyle;
    return(
        <div>
            <ImAttachment style ={{...iconStyle, marginTop: '12px', marginLeft:'50px' }}></ImAttachment>
             <GrEmoji style ={{ marginTop: '10px', marginLeft:'10px',...iconStyle }}></GrEmoji>
             
        </div>
    );
}