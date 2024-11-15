import logo from './logo.svg';
import './App.css';
import { Square } from './component/Square';
import { UsernameTitle } from './component/UsernameTitle';
import { Board } from './component/board/Board';
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
        <Board></Board>
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
