import './App.css';
import DeckBoard from './components/DeckBoard';
import RangeBoard from './components/RangeBoard';



function App() {
  return (
    <div style={{
      backgroundColor: 'black',
      height: '100vh',
    }}
    className="App">
      <div className="container">
        <div className="row">
          
          <div className="col-8">
            <div className="row">
              
            </div>
          </div>
          
          <div className="col-4">
            <RangeBoard />
            <DeckBoard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
