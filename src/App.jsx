import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NivelContent from './components/NivelContent'; // Importación corregida
import HistoriaDetalle from './components/HistoriaDetalle'; // Importación corregida
import Nav from './components/Nav';
import Header from './components/Header';
import { Inicio } from './components/Inicio';
import { niveles } from './servicios/rutas';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Header />
      <Routes>
        {/* Ruta inicial */}
        <Route path="/" element={<Inicio />} />

        {/* Rutas dinámicas para cada nivel */}
        {niveles.map((ruta) => (
          <Route 
            key={ruta.name} 
            path={`/${ruta.name}`} 
            element={<NivelContent nivel={ruta.name} />} // Renderiza el contenido del nivel
          />
        ))}

        {/* Rutas dinámicas para detalles de cada nivel */}
        { niveles.map((ruta) => (
          <Route 
            key={`${ruta.name}-detalle`} 
            path={`/${ruta.name}/:id`} // Captura un parámetro dinámico `id`
            element={<HistoriaDetalle nivel={ruta.name} />} // Renderiza el detalle de la historia
          />
        )) }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
