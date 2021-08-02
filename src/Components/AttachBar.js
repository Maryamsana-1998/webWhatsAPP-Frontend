import {BsFillImageFill} from  'react-icons/bs';
import {IoMdDocument,IoMdContact} from 'react-icons/io';
import {FaCamera} from 'react-icons/fa';



function AttachBar(){
    var mystyle = require('../MainStyles');

    return(
        <div style = {{display :'flex',width:'15%%', height:'inherit', zIndex:'4', flexDirection:'column',alignSelf:'flex-start'}}>
            <BsFillImageFill style={{...mystyle.attachIconStyle, backgroundImage:'linear-gradient(#ac44cf 50%, #bf59cf 50%)'}}></BsFillImageFill>
            <FaCamera style={{...mystyle.attachIconStyle, backgroundImage:'linear-gradient(#d3396d 50%, #ec407a 50%)'}}></FaCamera>
            <IoMdDocument  style={{...mystyle.attachIconStyle, backgroundImage:'linear-gradient(#5157ae 50%, #5f66cd 50%)'}}></IoMdDocument>
            <IoMdContact  style={{...mystyle.attachIconStyle, backgroundImage:'linear-gradient(#0795dc 50%, #0eabf4 50%)'}}></IoMdContact>
        
        </div>
    )

};

export default AttachBar;