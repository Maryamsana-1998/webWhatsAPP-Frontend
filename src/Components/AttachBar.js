import {BsFillImageFill} from  'react-icons/bs';
import {IoMdDocument,IoMdContact} from 'react-icons/io';
import {FaCamera} from 'react-icons/fa';



function AttachBar(){
    var attstyle = require('./styles/AttachStyle');

    return(
        <div style = {attstyle.mainStyle}>

            <BsFillImageFill style={attstyle.imgIcon}></BsFillImageFill>

            <FaCamera style={attstyle.camIcon}></FaCamera>

            <IoMdDocument  style={attstyle.docIcon}></IoMdDocument>

            <IoMdContact  style={attstyle.contIcon}></IoMdContact>
        
        </div>
    )

};

export default AttachBar;