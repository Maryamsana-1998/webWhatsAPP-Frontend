const mainStyle = {display :'flex',
width:'15%%', 
height:'inherit', 
zIndex:'4', 
flexDirection:'column',
alignSelf:'flex-start'};

exports.mainStyle =mainStyle;

const attachIconStyle = {height :'25px',
width:'25px', 
padding:'15px',
color:'white',
borderRadius:'37px',
margin :'5px',
marginLeft: '11px'};

exports.attachIconStyle = attachIconStyle;

const imgIcon = {...attachIconStyle,
backgroundImage:'linear-gradient(#ac44cf 50%, #bf59cf 50%)'};

exports.imgIcon =imgIcon;

const camIcon ={...attachIconStyle, 
backgroundImage:'linear-gradient(#d3396d 50%, #ec407a 50%)'};

exports.camIcon = camIcon;

const docIcon = {...attachIconStyle, 
backgroundImage:'linear-gradient(#5157ae 50%, #5f66cd 50%)'};

exports.docIcon = docIcon;

const contIcon = {...attachIconStyle, 
backgroundImage:'linear-gradient(#0795dc 50%, #0eabf4 50%)'};

exports.contIcon = contIcon;