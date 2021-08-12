
import NavChat from "./NavChat";
import {connect} from "react-redux";
import React,{useState,useEffect} from "react";
import useFetch from '../useFetch';
import Navprofile from "./Navprofile";
import Navsub from "./Navsub";
import axios from "axios";

const NavBar = (props) => {
  const mystyle = require('../MainStyles');
  const navstyle = require('./styles/NavbarStyles');
  const [data,setData] = useState('');
  const [pending,setPending] =useState(true);

  const {data: contacts, error,isPending} =useFetch('http://localhost:8000/api/users');

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

      <Navsub></Navsub>

      <div style={navstyle.chatbox}>
        
           { !pending && data.map((b) => (
             <div key={b.ID} onClick={()=>handleClickChat(b.ID)}>
            <NavChat name={b.Name} 
            lastseen={b.Lastseen} 
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