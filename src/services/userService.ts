// src/services/userService.ts
import httpClient from '../api/httpClient';
import type { UserResponseDTO } from '../models/UserResponseDTO';

export const userService = {
    // GET utenti
    getAll: async (nome?: string, ruolo?: string): Promise<UserResponseDTO[]> => {
        const response = await httpClient.get<UserResponseDTO[]>('/users', {
            params: {nome, ruolo}
        });
        return response.data;
    },

    delete: async (username: string): Promise<void> => {
        await httpClient.delete(`/users/${username}`);
    }
}