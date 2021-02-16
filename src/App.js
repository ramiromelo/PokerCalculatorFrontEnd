import './App.css';
import DeckBoard from './components/DeckBoard';
import RangeBoard from './components/RangeBoard';
import VillainPanel from './components/VillainPanel';

document.body.style = 'background: black;';


function App() {
  return (
    <div className="App">
      
      <div className="container">

        <div className="row">
          
          <div className="col-8">
            <div className="row">
              <div className="col-12 d-flex">
                <VillainPanel player='3' />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
              <VillainPanel player='2' />
              </div>
              <div className="col-6">
              <VillainPanel player='4' />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
              <VillainPanel player='1' />
              </div>
              <div className="col-6">
              <VillainPanel player='5' />
              </div>
            </div>
          </div>
          
          <div className="col-4">
            <div className="row">
              <RangeBoard />
            </div>
            <div className="row">
              <DeckBoard />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
