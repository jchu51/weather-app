import { weatherInstance } from "./utils/instances";
import axios, { AxiosError } from "axios";

import {
  CurrentWeatherResopnseData,
  FiveDayWeatherResopnseData,
  CurrentAndForecastWeatherReponseData,
} from "../types/openWeatherType";

type ResultType = {
  success: boolean;
  data?: any;
  message?: string;
};

export type ResultSuccessType<T> = {
  success: boolean;
  data: T;
  message?: string;
};
/**
 * Get current weather data
 * link: https://openweathermap.org/current
 * endpoint: https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
 *
 * @param cityName {string} search city name
 * @returns object
 */
export const fetchCurrentWeatherByCityName = async (
  cityName: string,
  units: string = "metric"
): Promise<ResultSuccessType<CurrentWeatherResopnseData> | ResultType> => {
  try {
    const result = await weatherInstance().get(
      `/weather?q=${cityName}&units=${units}`
    );

    if (result.status === 200) {
      return {
        success: true,
        data: result.data,
      };
    }
    return {
      success: false,
      message: "Failed to search, please try again",
    };
  } catch (err) {
    const error = err as Error | AxiosError;
    console.error("error", error);
    if (axios.isAxiosError(error)) {
      return {
        success: false,
        data: error.response?.data,
      };
    } else {
      return {
        success: false,
        message: "An unexpected error occurred",
      };
    }
  }
};

/**
 * Get 5 day / 3 hour forecast data
 *
 * link: https://openweathermap.org/forecast5
 * endpoint: api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
 *
 *
 * @param data {object} lat, lon and units for api call
 *
 * @returns {object}
 */
export const fetchNextFiveDayWeather = async (data: {
  lat: number;
  lon: number;
  units?: string;
}): Promise<ResultSuccessType<FiveDayWeatherResopnseData> | ResultType> => {
  try {
    let units = data.units || "metric";
    const result = await weatherInstance().get(
      `/forecast?lat=${data.lat}&lon=${data.lon}&units=${units}`
    );

    if (result.status === 200) {
      return {
        success: true,
        data: result.data,
      };
    }
    return {
      success: false,
      message: "An unexpected error occurred",
    };
  } catch (err) {
    const error = err as Error | AxiosError;
    console.error("error", error);
    if (axios.isAxiosError(error)) {
      return {
        success: false,
        data: error.response?.data,
      };
    } else {
      return {
        success: false,
        message: "An unexpected error occurred",
      };
    }
  }
};

/**
 * Get Current and forecast weather data
 *
 * link: https://openweathermap.org/api/one-call-api
 * @param data {object} api query values
 * @returns {object}
 */
export const fetchCurrentAndForecastWeather = async (data: {
  lat: number;
  lon: number;
  exclude?: string;
  units?: string;
  lang?: string;
}): Promise<ResultSuccessType<CurrentAndForecastWeatherReponseData> | ResultType> => {
  try {
    const { units = "metric", exclude, lang = "en" } = data;
    let query: string = "";

    if (exclude) {
      query += `&exclude=${exclude}`;
    }

    const result = await weatherInstance().get(
      `/onecall?lat=${data.lat}&lon=${data.lon}&units=${units}&lang=${lang}${query}`
    );

    if (result.status === 200) {
      return {
        success: true,
        data: result.data,
      };
    }
    return {
      success: false,
      message: "An unexpected error occurred",
    };
  } catch (err) {
    const error = err as Error | AxiosError;
    console.error("error", error);
    if (axios.isAxiosError(error)) {
      return {
        success: false,
        data: error.response?.data,
      };
    } else {
      return {
        success: false,
        message: "An unexpected error occurred",
      };
    }
  }
};
