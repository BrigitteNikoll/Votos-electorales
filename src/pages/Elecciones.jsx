import { Grid } from "@mui/material";
import Candidatos from "../components/Candidatos";
import Resumen from "../components/Resumen";

const Elecciones = () => {
  return (
    <Grid container spacing={5}>
      <Candidatos />

      <Grid container item spacing={2}>
        <Resumen />
      </Grid>
    </Grid>
  );
};

export default Elecciones;
