import axios from 'axios';

const api = {
  // Cambia el endpoint según sea necesario
  createItem: async (item: { nombre: string; interprete: string; link?: string }) => {
    const response = await axios.post('http://127.0.0.1:8000/api/canciones', item);
    return response.data;
  },
  // Puedes agregar más métodos según sea necesario
};

export default api;
