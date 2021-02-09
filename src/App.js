import './App.css';
import CardDeck from './components/CardDeck';


function App() {
  return (
    <div className="App">
      <CardDeck card='A' suit='d' />
      <CardDeck card='T' suit='c' onClick />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
    </div>
  );
}

export default App;
