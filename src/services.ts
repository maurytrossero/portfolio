// services.ts
import axios from 'axios';

export const getInstagramImages = async () => {
  const accessToken = localStorage.getItem('instagram_access_token');
  const userId = localStorage.getItem('instagram_user_id');

  if (!accessToken || !userId) {
    throw new Error('Falta el token de acceso o el user_id');
  }

  const hashtag = 'oriypaulo';
  const url = `https://graph.instagram.com/v1.0/${userId}/media?access_token=${accessToken}&fields=id,caption,media_url&limit=10&q=${hashtag}`;

  try {
    const response = await axios.get(url);
    const images = response.data.data.map((item: any) => item.media_url);
    console.log('Imágenes recuperadas de Instagram:', images);
    return images;
  } catch (error) {
    console.error('Error al obtener imágenes de Instagram:', error);
    throw error;
  }
};
