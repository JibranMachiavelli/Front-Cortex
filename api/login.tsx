import axios from 'axios';

const API_URL = 'http://localhost:3001/api/login';

export async function login(usuario: string, senha: string) {
  try {
    const response = await axios.post(API_URL, {
      name: usuario,
      password: senha
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erro na requisição:', error.response?.data || error.message);
    } else {
      console.error('Erro inesperado:', error);
    }
    
    throw error;
  }
}
