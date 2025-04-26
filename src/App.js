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
  const alumnoc = {
    nombre: 'Christian Gabriel ',
    apellido: 'Diaz',
    legajo: 61337,
    github: "https://github.com/christian22854 ",
    foto:"gamu.jpeg.jpg"
  }

  return (
    <div >
     <PaginaPrincipal alumno1={alumno1} alumnoL = {alumnoL}  alumnoc = {alumnoc} />
    </div>
  );
}

export default App;
