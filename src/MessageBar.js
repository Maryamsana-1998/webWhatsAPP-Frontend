import { ImAttachment } from "react-icons/im";
import { GrEmoji } from "react-icons/gr";

export default function MessageBar(){
    return(
        <div>
            <ImAttachment style ={{position:'absolute',width:'25px',height:'25px', marginTop: '12px',
             marginLeft:'50px',color :'grey',borderStyle:'solid',borderColor:'transparent',borderRadius:'2px' }}></ImAttachment>
             <GrEmoji style ={{position:'absolute',width:'30px',height:'30px', marginTop: '10px',
             marginLeft:'10px',color :'grey',borderStyle:'solid',borderColor:'transparent',borderRadius:'2px' }}></GrEmoji>
             
        </div>
    );
}