import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => (
    <AppBar position="static" style={{ backgroundColor: '#5438db2', padding: '20px' }}>
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Aprendamos Español
        </Typography>
      </Toolbar>
      <Typography variant="body1" component="div" style={{ textAlign: 'center', marginTop: '10px' }}>
          Comienza aprendiendo unas pocas palabras cada día y dentro de poco vas a
          leer textos y conversar con fluidez
      </Typography>
    </AppBar>
);

export default Header;