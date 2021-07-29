const barStyle = { width: '100%',
position: 'absolute',
backgroundColor: '#ededed',
borderStyle: 'solid',
borderColor: '#0000000d',
height: '58px',
textAlign: 'left',
};

exports.barStyle = barStyle;

const imgStyle = { position: 'absolute', 
borderRadius: '20px', 
height: "40px", 
borderStyle: "solid",
borderColor: '#00800017',
marginTop: '5px',
marginLeft:'8px' };

exports.imgStyle =imgStyle;

const notBar = {...barStyle,
    backgroundColor: 'rgb(157,225,254)',
    height: '100px',
    marginTop: '60px', width :'99%'
  };
  
exports.notBar= notBar;

const iconStyle = { position:'absolute',
width:'25px',
height:'25px',
color :'grey',
borderStyle:'solid',
borderColor:'transparent',
borderRadius:'2px'
};
exports.iconStyle= iconStyle;

const notIcon = {color:'rgb(157,225,254)',
backgroundColor:'white', 
width:'25px', height:'25px',
borderRadius:'30px',
marginTop:'30px', marginLeft:'7%'};

exports.notIcon= notIcon;

const textStyle ={position:'absolute',
display:'flex', direction:'column', left:'58px'
};

exports.textStyle = textStyle;

const contactStyle = {display:'flex',
flexDirection:'column',
marginLeft : '70px',
marginTop :'15px',
height:'inherit' ,
width: '30%',
alignSelf:'center'};

exports.contactStyle=contactStyle;

