import {BsFillImageFill} from  'react-icons/bs';
import {IoMdDocument,IoMdContact} from 'react-icons/io';
import {FaCamera} from 'react-icons/fa';

function AttachBar(){
    var style = require('./styles/AttachStyle');

    return(
        <div style = {style.mainStyle}>

            <BsFillImageFill style={style.imgIcon}></BsFillImageFill>

            <FaCamera style={style.camIcon}></FaCamera>

            <IoMdDocument  style={style.docIcon}></IoMdDocument>

            <IoMdContact  style={style.contIcon}></IoMdContact>
        
        </div>
    )

};

export default AttachBar;