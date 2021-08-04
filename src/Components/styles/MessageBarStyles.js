const buttonStyle ={ flex: 1, border: '1px solid transparent' };

exports.buttonStyle = buttonStyle;

const msgbarIcon = { width:'25px',
height:'25px',
color:'grey',
alignSelf:'center',
paddingLeft:'10px'
}

exports.msgbarIcon=msgbarIcon;

const msgBarStyle = {width:'inherit',
 borderRadius:'20px',
 border:'2px solid #80808069',
 alignSelf:'center',
 paddingLeft:'5px',
 paddingRight:'5px'};

 exports.msgBarStyle=msgBarStyle;
 
 const formStyle = { display: 'flex', 
 flex: 12, 
 alignSelf: 'center', 
 width: '95%', 
 height: '90%' };

 exports.formStyle =formStyle;

 const micStyle = { flex: 1, padding: '10px', ...msgbarIcon };

 exports.micStyle =micStyle;