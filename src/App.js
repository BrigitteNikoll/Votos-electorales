import Elecciones from "./pages/Elecciones.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  RegistrarCandidato  from "./pages/RegistrarCandidato.jsx";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar.jsx";
import { CandidatosProvider } from "./utils/CandidatosContext.js";
import "./style.css";

function App() {
  return (
    <CandidatosProvider>
      <BrowserRouter>
        <Navbar />
        <Box
          sx={{
            margin: 2,
          }}
        >
          <Routes>
            <Route index element={<Elecciones />}></Route>
            <Route path="registrar" element={<RegistrarCandidato />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </CandidatosProvider>
  );
}

export default App;
