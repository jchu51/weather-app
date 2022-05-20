import axios, { AxiosRequestConfig } from "axios";
import { setupInterceptorsTo } from "./interceptor";

import { WEATHER_API } from "../../constants/index";

export const weatherInstance = (options?: AxiosRequestConfig) => {
  const instance = axios.create({
    baseURL: `${WEATHER_API.baseUrl}/data/${WEATHER_API.version}`,
    params: {
      appid: process.env.REACT_APP_WEATHER_API_KEY,
    },
    ...options,
  });

  return setupInterceptorsTo(instance);
};

// https://openweathermap.org/data/2.5/find?q=sydney&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric
