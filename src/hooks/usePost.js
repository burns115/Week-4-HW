import { useState } from 'react';
import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export const usePost = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (url, data) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${baseUrl}${url}`, data);
      setResponse(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { postData, response, error, loading };
};