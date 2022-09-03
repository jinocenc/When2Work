import logo from './logo.svg';
import './App.css';
import { Button, Spinner } from "@blueprintjs/core"

function App() {
  const mySpinner = <Spinner intent="primary" />;
  const myButton = <Button intent="primary" loading={true} >Click me!!</Button>
  return (
    <div className="App"> .  
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {mySpinner}
        {myButton}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
