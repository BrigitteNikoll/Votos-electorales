import { useState } from "react";
import Elecciones from "./pages/Elecciones.jsx";
import { CandidatosContext } from "./utils/CandidatosContext.js";

const initialState = [
  { nombre: "Hugo", votos: 0 },
  { nombre: "Andrew", votos: 0 },
  { nombre: "Brigitte", votos: 0 },
];

function App() {
  const [candidatos, setCandidatos] = useState(initialState);
  //Recibe una prop llamada Value, que es un objeto que tiene la info que quiero compartir en los hijos
  return (
    <div>
      <CandidatosContext.Provider value={{candidatos, setCandidatos}}>
        <Elecciones />
      </CandidatosContext.Provider>
    </div>
  );
}

export default App;
