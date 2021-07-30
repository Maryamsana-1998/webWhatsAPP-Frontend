import picture from './images/picture.jpg'


function NavBarchat(){
    var mystyle = require('./MainStyles');
    const imgStyle = mystyle.imgStyle;
    const navChatStyle = mystyle.navChatStyle;


    return(
        <div style ={navChatStyle}>
        <img src={picture} alt="hello" style={{...imgStyle, left:'2%'}} ></img>
        </div>
    )
};

export default NavBarchat;