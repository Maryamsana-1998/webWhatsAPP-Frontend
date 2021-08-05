const mainStyle ={ display: 'flex', 
flexDirection: 'column', 
height: '100%' };

exports.mainStyle=mainStyle;

const txtbox = { flex: 4, 
color: 'black', 
height: 'inherit', 
textAlign: 'start', 
padding: '10px' };

exports.txtbox =txtbox;

const chatbox = { flex: 10, 
display: 'flex', 
flexDirection: 'column' };

exports.chatbox=chatbox;

const buttonStyle ={ flex: 1, 
border: '1px solid transparent' };

exports.buttonStyle =buttonStyle;

const notIcon ={ width:'25px',
height:'25px',
paddingLeft: '8%',
color:'grey',
};

exports.notIcon=notIcon;

const settingbar = { flex: 3,
zIndex: 5, 
backgroundColor: 'white',
border:  '2px #0000000d',
display: 'flex',
flexDirection:'column', 
width: '30px' };

exports.settingbar =settingbar;

const txtstyle = {flex:1,color :'grey', textAlign:'center',fontSize:'12px'};

exports.txtstyle =txtstyle;