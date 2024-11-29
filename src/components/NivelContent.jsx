import React, { useEffect, useState } from 'react';
import { Typography, Container, Box, Card, CardContent, CardMedia } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getStorysByNivel } from '../servicios/historiasServices';

const NivelContent = ({nivel}) => {
    //const { nivel } = useParams(); // Obtener el nivel desde la URL
    console.log(nivel)
    const [historias, setHistorias] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHistorias = async () => {
            try {
                const response = await getStorysByNivel(nivel); // Usar el nivel dinámico
                setHistorias(response || []);
            } catch (error) {
                console.error('No se cargaron historias', error);
            }
        };
        fetchHistorias();
    }, [nivel]); // Volver a cargar si el nivel cambia

    const obtenerPrimeraOracion = (texto) => {
        const primerPunto = texto.indexOf('.');
        return primerPunto !== -1 ? texto.slice(0, primerPunto + 1) : texto;
    };

    const handleClick = (id) => {
        navigate(`/${nivel}/${id}`); // Navegar al detalle del nivel
    };

    return (
        <Container style={{ padding: '20px', backgroundColor: '#4caf50', marginTop: '20px' }}>
            <Typography variant="h5" component="h2">
                {nivel.charAt(0).toUpperCase() + nivel.slice(1)} {/* Capitalizar el nivel */}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: '10px' }}>
                {historias.map((card) => (
                    <Box key={card.id} sx={{ width: '100%', maxWidth: 300, m: 2 }}>
                        <Card 
                            style={{ borderRadius: '8px', cursor: 'pointer' }}
                            onClick={() => handleClick(card.documentId)}
                        >
                            {card.imagen ? (
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={card.imagen}
                                    alt={card.titulo}
                                />
                            ) : (
                                <Box 
                                    sx={{ 
                                        height: 140, 
                                        backgroundColor: '#e0e0e0', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center' 
                                    }}
                                >
                                    <Typography variant="caption" color="textSecondary">
                                        Sin imagen
                                    </Typography>
                                </Box>
                            )}
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {card.titulo || 'Sin título'}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {obtenerPrimeraOracion(card.desarrollo || 'Sin contenido')}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Box>
        </Container>
    );
};

export default NivelContent;
