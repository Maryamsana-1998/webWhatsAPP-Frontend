import Box from '@material-ui/core/Box';
import { sizing } from '@material-ui/system';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import NavBar from './NavBar';
import Chat from './Chat';

export default function Main() {
  return (
    <>
      <div style={{ backgroundColor: '#dddbd1', height: 'inherit', width: 'inherit' }} >
      
        <NavBar />
        <Chat /> 
      </div>
    </>
  );
}