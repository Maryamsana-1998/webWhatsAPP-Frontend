import Message from "./Message";
import useFetch from "../useFetch";
import { useState ,useEffect} from "react";


const Mchat = (props) => {
    const [message,setMessage] = useState('');
    const [pending,setPending] = useState(true);
    const url = 'http://localhost:8000/api/users/chat/' + props.name;

    const { data, error, isPending } =  useFetch(url);
    
    useEffect(() => {
        console.log('chat changed')
        console.log(url)
        
        if (data !== null) {
          setMessage(data);
          setPending(false);
          console.log(message)
        }
      }, [props.name,data])

    return ( 

    <div  style ={{width:'inherit',height:'inherit',display:'flex',flexDirection:'column'}}>
     {!pending && message.map((m, index)=>(<div>
         <Message id ={m.SenderID} content = {m.MessageContent} key={index} style ={{alignSelf: m.SenderID ===1? 'flex-end':'flex-start'}}></Message>
     </div>)) }

    </div> );
}
 
export default Mchat;