import { BiMessage, BiDotsVerticalRounded } from "react-icons/bi";
import { IoIosNotificationsOff } from "react-icons/io"
import zainab from '../images/zainab.jpg'
import NavChat from "./NavChat";
import {connect} from "react-redux";
import React,{useState,useEffect} from "react";
import useFetch from '../useFetch';

const NavBar = (props) => {
  const mystyle = require('../MainStyles');
  const navstyle = require('./styles/NavbarStyles');
  const [data,setData] = useState('');
  const [pending,setPending] =useState(true);

  const {data: contacts, error,isPending} =useFetch(' http://localhost:8000/chats');

  useEffect(()=>{
    console.log(contacts)
    if(contacts !==null)
    {
      setData(contacts)
      setPending(false)
    }},[contacts])

  const handleClickChat = (id)=>{
    console.log('chat is clicked')
    props.chatClick(id)
  }
  return (
    <div style={navstyle.mainStyle}>

      <div style={mystyle.barStyle}>
        <img src={zainab} alt='profile picture' style={mystyle.imgStyle}></img>
        <BiMessage style={{ ...mystyle.iconStyle, marginLeft: '40%' }}></BiMessage>
        <BiDotsVerticalRounded style={mystyle.iconStyle }></BiDotsVerticalRounded>
      </div>

      <div style={mystyle.notBar}>
        <IoIosNotificationsOff style={mystyle.notbarIcon}></IoIosNotificationsOff>
        <div style={navstyle.txtbox}>
          <p style={{ fontSize: '17px' }}>Get notified of new messages</p>
          <p style={{ fontSize: '14px' }}>Turn on Desktop notifications</p>
        </div>
      </div>

      <div style={navstyle.chatbox}>
           { !pending && data.map((b) => (
             <div onClick={()=>handleClickChat(b.id)}>
            <NavChat name={b.title} 
            lastseen={b.lastseen} 
            pic = {b.picture}></NavChat> 
            </div>
        )) 
        }  
      </div>

    </div>

  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    chatClick:(id) => {
      dispatch( {type :'CHAT_OPEN', id: id } )
    }
  }
}

export default connect(null,mapDispatchToProps)(NavBar); 