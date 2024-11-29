import React from 'react';
import { Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { Home } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { niveles } from '../servicios/rutas';

const Nav = () => {

  return (
    <Toolbar style={{ backgroundColor: '#6dece3', display: 'flex', justifyContent: 'space-between' }}>
      {/* Sección izquierda: ícono Home y texto NANDA */}
      <Box display="flex" alignItems="center">
        <IconButton color="inherit" component={Link} to="/">
          <Home />
        </IconButton>
        <Typography variant="h6" component="span" style={{ marginLeft: '8px' }}>
          GENTE HABLANTE [logo]
        </Typography>
      </Box>
      
      {/* Sección derecha: botones de navegación */}
      <Box>
        {niveles.map((nivel) => (
           <Button 
           key={nivel.name}
           color="inherit" 
           component={Link} 
           to={`/${nivel.name}`}
         >
           {nivel.displayName}          
         </Button>
       ))}

      </Box>
    </Toolbar>
  );
};

export default Nav;
