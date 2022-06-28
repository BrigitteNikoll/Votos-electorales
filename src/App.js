import Elecciones from "./pages/Elecciones.jsx";
import { CandidatosProvider } from "./utils/CandidatosContext.js";

function App() {
  return (
    <CandidatosProvider>
      <Elecciones />
    </CandidatosProvider>
  );
}

export default App;
