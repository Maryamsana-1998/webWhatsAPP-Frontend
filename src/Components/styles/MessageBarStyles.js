const buttonStyle ={ border: '1px solid transparent',alignSelf:'center', height: '40px',width:'50px', };

exports.buttonStyle = buttonStyle;

const msgbarIcon = { width:'25px',
height:'25px',
color:'grey',
alignSelf:'center',
padding:'10px'
}

exports.msgbarIcon=msgbarIcon;

const msgBarStyle = {width:'inherit',
 borderRadius:'20px',
 border:'2px solid #80808069',
 alignSelf:'center',
 paddingLeft:'5px',
 paddingRight:'5px'};

 exports.msgBarStyle=msgBarStyle;
 
 const formStyle = {
 flex: 1, 
 width: '95%', 
 height: '90%',
padding:'10px'};

 exports.formStyle =formStyle;

 const micStyle = { padding: '10px', ...msgbarIcon };

 exports.micStyle =micStyle;