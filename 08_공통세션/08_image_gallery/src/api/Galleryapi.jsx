import axios from './axiosInstance';

export const createGallery = async ({ imageFile, title, description }) => {
  const formData = new FormData();
  formData.append('image', imageFile);
  formData.append('title', title);
  formData.append('description', description);

  try {
    const response = await axios.post('http://211.188.51.83:8080/api/galleries', formData);
    return response.data;
  } catch (error) {
    console.error('[글 등록 실패]', error);
    throw error;
  }
};