import Contact from './Contact';
import MessageBar from './MessageBar';
import React, { useState, useEffect } from 'react';
import EmojiBar from './EmojiBar';
import AttachBar from './AttachBar';
import useFetch from '../useFetch'
import Mchat from './Mchat';
import Message from './Message';


const Chat = (props) => {
  const mystyle = require('../MainStyles');
  const chstyle = require('./styles/chatStyles');
  const [name, setName] = useState(' ');
  const [seen, setSeen] = useState(' ');
  const [displayEmoji, setEmoji] = useState(false);
  const [displayAttach, setAttach] = useState(false);
  const [data,setData] =useState('');
  console.log(props.id)

  const { data: contact, error, isPending } =  useFetch('http://localhost:8000/api/users/' + props.id);

  useEffect(() => {
    console.log('chat changed')
    
    if (contact !== null) {
      //console.log(contact[0])
      setSeen(contact[0].Lastseen.slice(11,19))
      setName(contact[0].Name)
      setData(contact[0])
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

export default Chat;
