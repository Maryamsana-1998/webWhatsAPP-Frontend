import React from 'react';
import NavBar from './Components/NavBar';
import Chat from './Components/Chat';

export default function Main() {
  return (
    <div style={{ backgroundColor: '#dddbd1', margin: 10, height: '95vh', width: '90vw', display: 'flex', flexDirection: 'row' }}>

      <div style={{ flex: 1, backgroundColor: 'white' }}>
        <NavBar></NavBar>
      </div>

      <div style={{flex: 3, backgroundColor: '#e5ddd5' }}>
        <Chat ></Chat>
      </div>

    </div>
  );
}