import { ImAttachment } from "react-icons/im";
import { GrEmoji } from "react-icons/gr";
import { BsMicFill } from "react-icons/bs"
import React ,{useState} from "react";

const MessageBar = (props) => {
    const msgstyle = require('./styles/MessageBarStyles');
    const [message,setMessage] =useState('');

    return (
        <>
            <button name='attach'  style={msgstyle.buttonStyle} onClick={props.attach} >
               <ImAttachment style={msgstyle.msgbarIcon}>
               </ImAttachment>
            </button>

            <button name='emoji' style={msgstyle.buttonStyle} onClick={props.emoji} >
                <GrEmoji style={msgstyle.msgbarIcon}>
                </GrEmoji>
            </button>

            <form style={msgstyle.formStyle}>
                <label></label>
                <textarea
                    style={msgstyle.msgBarStyle}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
            </form>

            <BsMicFill style={msgstyle.micStyle}></BsMicFill>

        </>

    );
}
 
export default MessageBar;
