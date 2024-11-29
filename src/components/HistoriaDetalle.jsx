import React, { useEffect, useState } from 'react';
import { getStoryByDocumentId } from '../servicios/historiasServices';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, CircularProgress, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';

export const HistoriaDetalle = (nivel) => {
  const { id } = useParams();
  const [historia, setHistoria] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(nivel)

  const navigate = useNavigate();

  useEffect(() => {
    const fetchHistoria = async () => {
      try {
        const response = await getStoryByDocumentId(id);
        console.log(response)
        setHistoria(response || {});
      } catch (error) {
        setError('No se cargaron las historias');
      } finally {
        setLoading(false);
      }
    };
    fetchHistoria();
  }, [id]);

  const handleVolver = () => {
    navigate(`/${nivel.nivel}`);
  }

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography variant="h6" color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: 3 }}>
      <Card sx={{ maxWidth: 600, width: '100%' }}>
        {/* Imagen con tamaño ajustado */}
        <CardMedia
          component="img"
          alt="Historia Imagen"
          height="250"
          image={historia.imagen || 'ruta/por/defecto.jpg'} // Asumiendo que la historia tiene una propiedad de imagen
          sx={{ objectFit: 'contain', maxWidth: 300, width: '100%', margin: '0 auto', borderRadius:'8px' }}
        />
        <CardContent sx={{ padding: 2 }}>
          {/* Título */}
          <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
            {historia.titulo}
          </Typography>
          {/* Texto de desarrollo ajustado */}
          <Typography variant="body1" paragraph sx={{ maxWidth: '80%', margin: '0 auto' }}>
            {historia.desarrollo}
          </Typography>
          {/* Reproductor de grabación (audio) */}
          {historia.audio && (
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <audio controls>
              <source src={historia.audio} type="audio/mp4" />
              Tu navegador no soporta el elemento de audio.
            </audio>
            </Box>
          )}
        </CardContent>
        <CardActions>
          {/* Botón de acción */}
          <Button  
            size="small" 
            color="primary"
            onClick={handleVolver}
            >
            Volver
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};


export default HistoriaDetalle;
