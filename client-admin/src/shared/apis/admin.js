import { axiosAdmin } from './api';

export const getFields = async () => {
  return await axiosAdmin.get('/fields');
};

export const createFields = async (data) => {
  return await axiosAdmin.post('/fields', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const updateField = async (IdleDeadline, data) => {
  return await axiosAdmin.put(`/fields/${id}`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const deleteField = async (id) => {
  return await axiosAdmin.put(`/fields/${id}/desactivate`);
};
