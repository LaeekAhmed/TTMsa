import './App.css';
import { PingPong } from './components/scoreboard';
import Navbar1 from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar1/>
      <PingPong/>
    </div>
  );
}

export default App;
