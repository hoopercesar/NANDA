import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Card, CardContent, CardMedia, Button } from '@mui/material';
import Header from './Header';
import gallina from '../assets/imagenes/gallinaSofia.png'
import buho from '../assets/imagenes/buhoDiego.png'
import perro from '../assets/imagenes/perritoMiguel.png'

const App = () => {
  return (
    <Container maxWidth="lg">
      <Nav />
      <Header />
      
      <Content />
    </Container>
  );
};



const Nav = () => (
  <Toolbar style={{ justifyContent: 'center', backgroundColor: '#6dece3' }}>
    <Button color="inherit">Iniciante</Button>
    <Button color="inherit">Básico</Button>
    <Button color="inherit">Intermedio</Button>
    <Button color="inherit">Avanzado</Button>
    <Button color="inherit">Plus</Button>
  </Toolbar>
);

const Content = () => (
<Container style={{ padding: '20px', backgroundColor: '#4caf50', marginTop: '20px' }}>
    <Typography variant="h5" component="h2">
      Iniciante
    </Typography>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: '10px' }}>
      {cardsData.map((card, index) => (
        <Box key={index} sx={{ width: '100%', maxWidth: 300, m: 2 }}>
          <Card style={{ borderRadius: '8px' }}>
            <CardMedia
              component="img"
              height="140"
              image={card.imagen}
              alt={card.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  </Container>
    

);

const cardsData = [
  {
    img: gallina,
    title: 'La gallina llamada Sofía',
    description: 'Había una gallinita llamada Sofía que quería salir a parque en invierno...'
  },
  {
    img: buho,
    title: 'Buho llamado Diego',
    description: 'Esta es la historia de un buho llamado Diego...'
  },
  {
    img: perro,
    title: 'Cuidado con Desconocidos',
    description: 'El perrito Miguel salió al parque con las advertencia de su padre...'
  },

];

export default App;
