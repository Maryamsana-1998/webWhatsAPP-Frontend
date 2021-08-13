import Message from "./Message";
import { useState, useEffect } from "react";
import { fetchMsgs } from '../Redux/messages/msgActions';
import { connect } from "react-redux";


const Mchat = (props) => {

  const [message, setMessage] = useState('');
  const [pending, setPending] = useState(true);
  const url = 'http://localhost:8000/api/users/chat/' + props.name;
  const style = require('./styles/chatStyles');

  useEffect(() => {
    props.fetchMsgs(url)
    console.log(props.msgData)

    if (props.msgData !== null) {
      setMessage(props.msgData);
      setPending(false);
    }
  }, [props.name])

  return (

    <div style={style.mchat}>

      {!pending && message.map((m, index) => (
        <div>
          <Message id={m.SenderID} content={m.MessageContent} key={index} />
        </div>))}

    </div>);
}

const mapStateToProps = state => {
  return {
    msgData: state.messages.msg
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMsgs: (url) => dispatch(fetchMsgs(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mchat);