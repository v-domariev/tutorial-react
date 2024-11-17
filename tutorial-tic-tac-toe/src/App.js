import './App.css';
import { UsernameTitle } from './component/UsernameTitle';
import { Game } from './component/game/Game';
// import './component/Square';

function App() {

  // }
  return (
    <div className="App">
      <header className="App-header">
        Hi!
        {/* <button className="square">X</button> */}
        {/* { */}
        {/* <Square></Square> */}
        {/* <Board></Board> */}
        <Game></Game>
        <UsernameTitle></UsernameTitle>
        {/* {new Square()} */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
