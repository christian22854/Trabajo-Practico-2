import gamu from './style/gamu.jpg';
import './App.css';
import Pag_principal from "./pages/Pag_principal";



function App() {

  const alumno2 = {
    nombre: 'Christian Gabriel',
    apellido: 'Diaz',
    legajo: 61337,
    github: "https://github.com/christian22854",
    foto:"gamu.jpg"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={gamu} className="App-logo" alt="logo" />
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
    <div/>
     <Pag_principal alumno2={alumno2}/>
    </div>
  );
}

export default App;