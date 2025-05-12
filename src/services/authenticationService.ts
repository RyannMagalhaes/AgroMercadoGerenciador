import type { AxiosResponse } from "axios";
import api from "./api";

const authenticationService = {
    login: async (username: string, password: string): Promise<AxiosResponse> => {
        const response = await api.post("/login", { username, password });
        return response;
    }
}

export default authenticationService;