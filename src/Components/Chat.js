import Contact from './Contact';
import MessageBar from './MessageBar';
import React, { useState, useEffect } from 'react';
import EmojiBar from './EmojiBar';
import AttachBar from './AttachBar';
import useFetch from '../useFetch'


const Chat = (props) => {
  const mystyle = require('../MainStyles');
  const chstyle = require('./styles/chatStyles');
  const [name, setName] = useState(' ');
  const [seen, setSeen] = useState(' ');
  const [displayEmoji, setEmoji] = useState(false);
  const [displayAttach, setAttach] = useState(false);

  const { data: contact, error, isPending } = useFetch(' http://localhost:8000/chats/' + props.id);

  useEffect(() => {
    console.log('chat changed')
    console.log(contact)
    if (contact !== null) {
      setSeen(contact.lastseen)
      setName(contact.title)
    }
  }, [props.id, contact])

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

        <div style={{ flex: 7 }}></div>

        {displayAttach && <AttachBar></AttachBar>}

        {displayEmoji && <div style={mystyle.emojiBarStyle}>
          <EmojiBar></EmojiBar>
        </div>}

      </div>

      <div style={mystyle.barStyle}>
        <MessageBar emoji={handleEMojiClick} attach={handleAttachClick} ></MessageBar>
      </div>

    </ div>
  );
}

export default Chat;
