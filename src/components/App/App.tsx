import './App.scss';
import Background from '../Background/Background';
import State from '../State/State';
import Protagonist from '../Protagonist/Protagonist';
import Navigation from '../Navigation/Navigation';

function App() {

  return (
    <div className="App">
      <Background />
      <div className='main'>
      <State/>
      <Protagonist />
      <Navigation/>
      </div>
    </div>
  );
}

export default App;
