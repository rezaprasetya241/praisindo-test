import type { AxiosInstance } from "axios";
import axios from "axios";

export class Api {
  private static instance: Api;
  private axiosInstance: AxiosInstance;

  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      timeout: 10000,
    });

    this.axiosInstance.interceptors.request.use((config) => {
      config.params = {
        ...config.params,
        "api-key": import.meta.env.VITE_API_KEY,
      };
      return config;
    });
  }

  public static getInstance(): Api {
    if (!Api.instance) {
      Api.instance = new Api();
    }
    return Api.instance;
  }
  public getAxiosInstance(): AxiosInstance {
    return this.axiosInstance;
  }
}
