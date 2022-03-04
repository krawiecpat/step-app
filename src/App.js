import './App.css';
import Step from './Step';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-title'>Aplikacja licznika w ReactJS</h1>
      </header>
      <Step initValue={15}/>
    </div>
  );
}


export default App;
