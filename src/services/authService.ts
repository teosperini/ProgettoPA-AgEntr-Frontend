import httpClient from "../api/httpClient";
import type { LoginRequest } from "../models/LoginRequest";
import type { UserResponseDTO } from "../models/UserResponseDTO";

export const authService = {
    login: async (credentials: LoginRequest): Promise<UserResponseDTO> => {
        const response = await httpClient.post<UserResponseDTO>('/auth/login', credentials);
        return response.data;
    }
}