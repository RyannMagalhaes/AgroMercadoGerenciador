import type { AxiosResponse } from "axios";
import api from "./api";

const authenticationService = {
    login: async (username: string, password: string): Promise<AxiosResponse> => {
        const response = await api.post("/token/", { username, password });
        return response;
    }
}

export default authenticationService;