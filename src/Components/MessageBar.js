import { ImAttachment } from "react-icons/im";
import { GrEmoji } from "react-icons/gr";
import { useState } from "react";
import { BsMicFill } from "react-icons/bs"


export default function MessageBar() {
    var mystyle = require('../MainStyles');
    const { message, setMessage } = useState('null');


    return (
        <>
            <ImAttachment style={{ ...mystyle.msgbarIcon, flex: 1 }}></ImAttachment>

            <GrEmoji style={{ flex: 1, ...mystyle.msgbarIcon }}></GrEmoji>

            <form style={{display:'flex', flex:12, alignSelf:'center',width:'95%', height:'90%'}}>
                <label></label>
                <textarea
                    style= {mystyle.msgBarStyle}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
            </form>

            <BsMicFill style={{flex:1, padding:'10px',...mystyle.msgbarIcon}}></BsMicFill>

        </>
    );
}