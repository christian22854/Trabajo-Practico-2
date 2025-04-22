import PaginaPrincipal from "./pages/PaginaPrincipal";



function App() {

  const alumno1 = {
    nombre: 'Juan Manuel',
    apellido: 'Agostino Colombres',
    legajo: 61131,
    github: "https://github.com/JuanmaAgostino",
    foto:"fotoAgostino.jpeg"
  }

  return (
    <div >
     <PaginaPrincipal alumno1={alumno1}/>
    </div>
  );
}

export default App;
