import whatsapp from '../images/whatsapp_login.png'

const ChatBackdrop = () => {
    var mystyle = require('../MainStyles')
    return (
        <div style={mystyle.backdropStyle}>

            <img src={whatsapp} style={mystyle.backdropimgStyle}></img>

            <div style={{ flex: 2, justifyContent: 'center', marginTop: '50px' }}>

                <p style={{ fontSize: '20px' }}>Keep your phone connected</p>
                <p style={{ fontSize: '12px' }}>Whatsapp connects your phone sync messages</p>

            </div>
        </div>
    );
}

export default ChatBackdrop;