import { useState } from 'react';
import Elecciones from "./pages/Elecciones.jsx"


const initialState = [
  {nombre: "Hugo", votos: 0},
  {nombre: "Andrew", votos: 0},
  {nombre: "Cesar", votos: 0},
]

function App() {

  const [candidatos, setCandidatos] = useState(initialState)

  return (
    <div>
      <Elecciones candidatos={candidatos} setCandidatos={setCandidatos}/>
    </div>
  );
}

export default App;
