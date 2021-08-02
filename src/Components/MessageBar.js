import { ImAttachment } from "react-icons/im";
import { GrEmoji } from "react-icons/gr";
import { useState } from "react";
import { BsMicFill } from "react-icons/bs"
import React from "react";




class MessageBar extends React.Component {

    constructor(props) {
        super(props);
        this.mystyle = require('../MainStyles');
       // this.handleEMojiClick = this.props.handleEMojiClick.bind(this)
        this.state = {
            message: ''
        }

    };


    render() {
        return (
            <>
                <button name='attach'
                    style={{ flex: 1, border: '1px solid transparent' }}
                    onClick={this.props.attach} >
                   <ImAttachment style={{ ...this.mystyle.msgbarIcon}}>
                   </ImAttachment>
                </button>

                <button name='emoji'
                    style={{ flex: 1, border: '1px solid transparent' }}
                    onClick={this.props.emoji} >
                    <GrEmoji style={{ ...this.mystyle.msgbarIcon }}>
                    </GrEmoji>
                </button>

                <form style={{ display: 'flex', flex: 12, alignSelf: 'center', width: '95%', height: '90%' }}>
                    <label></label>
                    <textarea
                        style={this.mystyle.msgBarStyle}
                        required
                        value={this.state.message}
                        onChange={(e) => this.setState({ message: e.target.value })}
                    ></textarea>
                </form>

                <BsMicFill style={{ flex: 1, padding: '10px', ...this.mystyle.msgbarIcon }}></BsMicFill>

            </>

        );

    };
};

export default MessageBar;