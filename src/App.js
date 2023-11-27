import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {/* Se recibe en Index.js linea 10, se define por "root" linea 7, y esto se inserta en index.html linea 31  */}
        Primer componente 
         </p>
      </header>
    </div>
  );
}

export default App;
