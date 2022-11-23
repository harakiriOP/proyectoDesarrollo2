import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="card">
          <img src={logo} className="App-logo" alt="logo" />
          <p></p>
          <form>
            <input type="email" placeholder="Usuario"/>
            <p></p>
            <input type="password" placeholder="Contraseña"></input>
            <p></p>
            <button type="submit"><b>Ingresar</b></button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
