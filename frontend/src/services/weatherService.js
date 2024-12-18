import axios from 'axios';

const API_URL = 'http://localhost:5000/api/weather';

export const searchWeather = async (city) => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${API_URL}/weather?city=${city}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export const fetchReport = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${API_URL}/report`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};
