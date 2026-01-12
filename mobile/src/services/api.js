import axios from 'axios';
import { Platform } from 'react-native';

const API_URL = 'http://192.168.1.3:3000';
export const getSpaceships = async () => {
    try {
        const response = await axios.get(`${API_URL}/spaceships`);
        return response.data;
    } catch (error) {
        console.error("Error conectando con API:", error);
        return []; // Retorna array vacío para que la app no explote
    }
};