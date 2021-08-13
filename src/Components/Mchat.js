import Message from "./Message";
import { useState ,useEffect} from "react";
import { fetchMsgs } from '../Redux/messages/msgActions';
import {connect} from "react-redux";


const Mchat = (props) => {
    const [message,setMessage] = useState('');
    const [pending,setPending] = useState(true);
    const url = 'http://localhost:8000/api/users/chat/' + props.name;
    
    useEffect(() => {
        props.fetchMsgs(url)
        console.log(props.msgData)
        if (props.msgData !== null) {
          setMessage(props.msgData);
          setPending(false);
          console.log(message)
        }
      }, [props.name])

    return ( 

    <div  style ={{width:'inherit',height:'inherit',display:'flex',flexDirection:'column'}}>
     {!pending && message.map((m, index)=>(<div>
         <Message id ={m.SenderID} content = {m.MessageContent} key={index} style ={{alignSelf: m.SenderID ===1? 'flex-end':'flex-start'}}></Message>
     </div>)) }

    </div> );
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

export default connect(mapStateToProps,mapDispatchToProps)(Mchat);