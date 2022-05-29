import React from 'react';
import qs from 'query-string';
import axiosService from './../Stores/API/AxiosService';

const API_ENDPOINT = 'https://6229acabbe12fc4538a4854c.mockapi.io/api/ShopOnline';
const url = 'Products';

export const getList = async (params = {}) => {
  let queryParams = '';
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }
  let result = await axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
  
  return result.data;
};

export const addProduct = data => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const updateProduct = (data, productId) => {
  return axiosService.put(`${API_ENDPOINT}/${url}/${productId}`, data);
};

export const deleteProduct = productId => {
  return axiosService.delete(`${API_ENDPOINT}/${url}/${productId}`);
};
