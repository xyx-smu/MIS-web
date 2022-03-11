import { environment } from "src/environments/environment";

const baseUrl = environment.baseUrl;

export const loginUrl = baseUrl + "login/";
export const tokenRefreshUrl = baseUrl + "token_refresh/";
export const registerUrl = baseUrl + "register/";
