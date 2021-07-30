import Contact from './Contact';
import MessageBar from './MessageBar';

function Chat(props) {
  var mystyle = require('../MainStyles');
  const barStyle = mystyle.barStyle;

  return (

    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }} >

      <div style={{ display: 'flex', flexDirection: 'row', flex: 1, ...barStyle }}>
        <Contact></Contact>
      </div>

      <div style={{ flex: 10.5 }}></div>

      <div style={{ display: 'flex', flexDirection: 'row', flex: 1, ...barStyle }}>
        <MessageBar></MessageBar>
      </div>

    </ div>
  );
}

export default Chat;