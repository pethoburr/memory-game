import './stylesheets/App.css';
import Game from './components/game';

const App = () => {
  return (
    <div className="App">
      <header><h1>Memory game</h1></header>
      <Game className='game'/>
      <footer><h4>Copyright by Maninder Pahal</h4></footer>
    </div>
  );
}

export default App;
