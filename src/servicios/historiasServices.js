import api from "../api/api";

const token = 'df93cb7bf0252f126bca048553112cfbf27bc15af455f4aa403b187c6e24360318951f5913bec6332b15e707a644a08bb4eaf60391b2aa6e74d2f1cfcd9acf306c45220f143f18346cc7140af63d4526526b0d62e29889252e5eb1ca52a60ab2ee55c26feb8502a98375660b4c8a4751e796f48e7aaf39b4aa5e2415801960fa'; // Reemplaza 'YOUR_API_TOKEN' con el verdadero token
// obtiene historias de strapi Historias según nivel
export const getStorysByNivel = async (nivel) => {
    
    try {
        const response = await api.get(`/api/historias`, {
            headers: {
              Authorization: `Bearer ${token}` // Incluye el token de autorización
            },
            params: {
                filters: { nivel: { $eq: nivel } } // Filtra por nivel
            }
          })
        return response.data.data;
    } catch (error) {
        console.error('Error al cargar historias', error);
    }
}

// obtiene historias desde strai según idDocumento

export const getStoryByDocumentId = async (idDocumento) => {
    try {
        const response = await api.get(`/api/historias/${idDocumento}`)
        console.log(response)
        return response.data.data;
    } catch (error) {
        console.error(error);
    }
}