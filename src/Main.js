import React ,{useEffect}from 'react';
import NavBar from './Components/NavBar';
import Chat from './Components/Chat';
import ChatBackdrop from './Components/chatBackdrop';
import {connect} from 'react-redux';

const Main = (props) => {
  useEffect(()=>{
   console.log('everytime props changeds')
   console.log(props.id)
  },[props.id])

  return (
    <div style={{ backgroundColor: '#dddbd1', margin: 10, height: '95vh', width: '90vw', display: 'flex', flexDirection: 'row' }}>

      <div style={{ flex: 1, backgroundColor: 'white' }}>
        <NavBar ></NavBar>
      </div>

      <div style={{flex: 3, backgroundColor: '#e5ddd5' }}>
        {props.id === 0? <ChatBackdrop></ChatBackdrop> : <Chat id ={props.id} ></Chat> }
      </div>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    id: state.selectedChat
  }
}

export default connect(mapStateToProps)(Main);