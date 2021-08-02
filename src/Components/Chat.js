import Contact from './Contact';
import MessageBar from './MessageBar';
import React from 'react';
import EmojiBar from './EmojiBar';
import AttachBar from './AttachBar';


class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.mystyle = require('../MainStyles');
    this.state = {
      displayEmoji: false,
      displayAttach: false,
    }
  }

  handleEMojiClick = () => {
    this.setState({
      displayEmoji: true,
      displayAttach: false,
    })
    console.log('emoji clicked');
  }

  handleAttachClick = () => {
    this.setState({
      displayEmoji: false,
      displayAttach: true,
    })
    console.log('attach clicked');
  }

  render() {
    return (

      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }} >

        <div style={{ display: 'flex', flexDirection: 'row', flex: 1, ...this.mystyle.barStyle }}>
          <Contact></Contact>
        </div>

        <div style={{ flex: 10.5, display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 7 }}></div>
          {this.state.displayAttach &&  <AttachBar></AttachBar>}
          {this.state.displayEmoji && <div style={{ flex: 3, ...this.mystyle.emojiBarStyle }}>
            {this.state.displayEmoji && <EmojiBar></EmojiBar>}
          </div>}
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', flex: 1, ...this.mystyle.barStyle }}>
          <MessageBar emoji={this.handleEMojiClick} attach={this.handleAttachClick} ></MessageBar>
        </div>

      </ div>
    );
  }

}

export default Chat;