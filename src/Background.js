
function Background(props) {
  const mystyle = require('./MainStyles')
  return (
    <div className="App" style={{ backgroundColor: '#ccc', height: '100vh' }}>
      <div style={{ height: '20%', backgroundColor: '#00af9c' }}></div>
      <div style={mystyle.mainbackStyle}>
        {props.children}
      </div>
    </div>
  );
}

export default Background;