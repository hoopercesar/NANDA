import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, CardContent, Typography, Box } from '@mui/material';
import { getStorysByNivel } from '../servicios/historiasServices';

const Historias = () => {
  const [historias, setHistorias] = useState([]);

  useEffect(() => {
    const fetchHistorias = async () => {
        try {
            const response = await getStorysByNivel('iniciante');
            setHistorias(response.data);
        } catch (error) {
            console.error('no se cargaron historias', error);
        }
    }
    fetchHistorias();    
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Historias
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {historias.map(historia => (
          <Card key={historia.id} sx={{ minWidth: 275, marginBottom: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {historia.titulo}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {historia.desarrollo}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Historias;

