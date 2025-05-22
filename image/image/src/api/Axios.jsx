// src/api/galleryApi.js
import axios from "axios";

// 1. 전체 목록 조회 (GET) + 페이징
export const getGalleries = async (page = 1, size = 16) => {
  const response = await axios.get(`api/galleries`, {
    params: { page, size },
  });
  return response.data;
};

// 2. 하나 조회 (GET)
export const getGalleryById = async (id) => {
  const response = await axios.get(`api/galleries/${id}`);
  return response.data;
};

// 3. 새 글 등록 (POST)
export const createGallery = async (data) => {
  const response = await axios.post(`http://211.188.51.83:8080/api/galleries`, data);
  return response.data;
};

// 4. 글 수정 (PUT)
export const updateGallery = async (id, data) => {
  const response = await axios.put(`api/galleries/${id}`, data);
  return response.data;
};

// 5. 글 삭제 (DELETE)
export const deleteGallery = async (id) => {
  const response = await axios.delete(`api/galleries/${id}`);
  return response.data;
};
