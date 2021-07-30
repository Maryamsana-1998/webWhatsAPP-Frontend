
function Background(props) {
  return (
    <div className="App" style={{ backgroundColor: '#ccc', height: '100vh' }}>
      <div style={{ height: '20%', backgroundColor: '#00af9c' }}></div>
      <div style={{
        position: 'absolute',
        height: '100vh',
        width: '100%',
        top: 0,
        zIndex: 1,
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {props.children}
      </div>
    </div>
  );
}

export default Background;