import logo from './logo.svg';
import './App.css';
import Chat from './Chat'
import Main from './Main'
import Background from './Background';

function App() {
  return (
    <Background>
      <div style={{ backgroundColor: 'white', margin: 10, height:'95vh', width: '90vw'}}>
      <Main/>
      </div>
    </Background>
   
  );
}

export default App;
