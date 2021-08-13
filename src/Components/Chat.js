import Contact from './Contact';
import MessageBar from './MessageBar';
import React, { useState, useEffect } from 'react';
import EmojiBar from './EmojiBar';
import AttachBar from './AttachBar';
import Mchat from './Mchat';
import Message from './Message';
import {connect} from "react-redux";

const Chat = (props) => {
  const mystyle = require('../MainStyles');
  const chstyle = require('./styles/chatStyles');
  const [name, setName] = useState(' ');
  const [seen, setSeen] = useState(' ');
  const [displayEmoji, setEmoji] = useState(false);
  const [displayAttach, setAttach] = useState(false);
  const [data,setData] =useState('');
  console.log(props.id)


  useEffect(() => {

    if (props.contact !== null) {

      setSeen(props.contact[props.id -1].Lastseen.slice(11,19))
      setName(props.contact[props.id -1].Name)
      setData(props.contact[props.id -1])
    }
  }, [props.id])

  const handleEMojiClick = () => {
    setEmoji(!displayEmoji);
    setAttach(false);
    console.log('emoji clicked');
  }

  const handleAttachClick = () => {
    setAttach(!displayAttach);
    setEmoji(false);
    console.log('attach clicked');
  }

  return (

    <div style={chstyle.mainStyle} >

      <div style={mystyle.barStyle}>
        <Contact name={name} lastseen={seen}></Contact>
      </div>

      <div style={chstyle.chat}>

        <div style={{ flex: 1}}>
          <Mchat name = {name.slice(0,6)}></Mchat>
        </div>

        {displayAttach && <AttachBar class='attachbar'></AttachBar>}

        {displayEmoji && <div style={mystyle.emojiBarStyle}>
          <EmojiBar></EmojiBar>
        </div>}

      </div>

      <div style={mystyle.barStyle}>
        <MessageBar chat ={data} emoji={handleEMojiClick} attach={handleAttachClick} ></MessageBar>
      </div>

    </ div>
  );
}

const mapStateToProps = state => {
  return {
    contact : state.users.users
  }
}

export default connect(mapStateToProps)(Chat);
