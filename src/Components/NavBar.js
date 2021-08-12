import NavChat from "./NavChat";
import {connect} from "react-redux";
import React,{useState,useEffect} from "react";
import useFetch from '../useFetch';
import Navprofile from "./Navprofile";
import Navsub from "./Navsub";
import {fetchUsers} from "../Redux/users/userActions";

const NavBar = (props) => {
  const mystyle = require('../MainStyles');
  const navstyle = require('./styles/NavbarStyles');
  const [data,setData] = useState('');
  const [pending,setPending] =useState(true);

  useEffect(()=>{
    props.fetchUsers()
    console.log(props.userData);
    if(props.userData !== null){
      setData(props.userData);
      setPending(false);
    }
   },[])

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
            {b.ID !== props.user? <NavChat name={b.Name} 
            lastseen={b.Lastseen} 
            pic = {b.picture}></NavChat> : <div style={{display:"none"}}></div> }
            </div>
        )) 
        }  
      </div>

    </div>

  )
}
const mapStateToProps = state => {
  return {
    userData: state.users.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    chatClick:(id) => {
      console.log('chat open dispatch')
      dispatch( {type :'CHAT_OPEN', id: id } )
    },
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar); 