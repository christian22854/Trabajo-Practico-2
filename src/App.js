import PaginaPrincipal from "./pages/PaginaPrincipal";



function App() {

  const alumno1 = {
    nombre: 'Juan Manuel',
    apellido: 'Agostino Colombres',
    legajo: 61131,
    github: "https://github.com/JuanmaAgostino",
    foto:"fotoAgostino.jpeg"
  }

  const alumnoL = {
    nombre: 'Lucas Ismael',
    apellido: 'Leon',
    legajo: 61335,
    github: "https://github.com/LuquitasLeon",
    foto:"fotoLucas.jpeg"
  }

  return (
    <div >
     <PaginaPrincipal alumno1={alumno1} alumnoL = {alumnoL}/>
    </div>
  );
}

export default App;
