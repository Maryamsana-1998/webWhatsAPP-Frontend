import { ImAttachment } from "react-icons/im";
import { GrEmoji } from "react-icons/gr";
import { BsMicFill } from "react-icons/bs"
import React, { useState } from "react";
import axios from "axios";

const MessageBar = (props) => {
    const msgstyle = require('./styles/MessageBarStyles');
    const [message, setMessage] = useState('');

    const handleAddMessage = async () => {
        const time = Date.now()
        const data = { "sender": 1, "receiver": props.chat.ID, "Message": message };
        const response = await axios.post('http://localhost:8000/api/users/message', data)
            .then(() => {
                console.log('message posted');
                setMessage('');
            })
    }

    return (
        <>
            <button name='attach' style={msgstyle.buttonStyle} onClick={props.attach} >
                <ImAttachment style={msgstyle.msgbarIcon}>
                </ImAttachment>
            </button>

            <button name='emoji' style={msgstyle.buttonStyle} onClick={props.emoji} >
                <GrEmoji style={msgstyle.msgbarIcon}>
                </GrEmoji>
            </button>

            <label></label>
            <textarea
                style={msgstyle.msgBarStyle}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <input type='submit' onClick={handleAddMessage} ></input>

            <BsMicFill style={msgstyle.micStyle}></BsMicFill>
        </>

    );
}

export default MessageBar;
