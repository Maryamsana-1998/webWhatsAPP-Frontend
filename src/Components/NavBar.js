
import NavChat from "./NavChat";
import {connect} from "react-redux";
import React,{useState,useEffect} from "react";
import useFetch from '../useFetch';
import Navprofile from "./Navprofile";
import Navsub from "./Navsub";

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
      setPending(isPending)
    }},[contacts])

  const handleClickChat = (id)=>{
    console.log('chat is clicked')
    props.chatClick(id)
  }
  return (
    <div style={navstyle.mainStyle}>

      <Navsub></Navsub>

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