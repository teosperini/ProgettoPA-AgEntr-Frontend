import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
    headers: {
        'Content-Type': 'application/json',
    }
});

// Creazione di un Interceptor -> se il server risponde con 401 l'utente può essere automaticamente loggato fuori
httpClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401){
            console.warn("Sessione scaduta o non valida")
            // Qui potrei resettare lo stato dell'auth
        }
        return Promise.reject(error);
    }
);

export default httpClient;