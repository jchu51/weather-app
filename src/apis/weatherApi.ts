import { weatherInstance } from "./utils/instances";

/**
 * Get current weather data
 * link: https://openweathermap.org/current
 * endpoint: https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
 *
 * @param cityName {string} search city name
 * @returns object
 */
export const fetchCurrentWeatherByCityName = async (cityName: string) => {
  try {
    const result = await weatherInstance().get(`/weather?q=${cityName}`);

    if (result.status === 200) {
      return {
        success: true,
        data: result.data,
      };
    } else if (result.status === 400) {
      return {
        success: false,
        message: "Failed to search, please try again",
      };
    }
  } catch (err) {
    console.error("err", err);

    return {
      success: false,
      message: "Server error",
    };
  }
};

/**
 * Get 5 day / 3 hour forecast data
 *
 * link: https://openweathermap.org/forecast5
 * endpoint: api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
 *
 *
 * @param lat {number} Geographical coordinates latitude
 * @param lon {number} Geographical coordinates longitude
 *
 * @returns {object}
 */
export const fetchNextFiveDayWeather = async (lat: number, lon: number) => {
  try {
    const result = await weatherInstance().get(
      `/forecast?lat=${lat}&lon=${lon}`
    );

    if (result.status === 200) {
      return {
        success: true,
        data: result.data,
      };
    } else if (result.status === 400) {
      return {
        success: false,
        message: "Failed to load, please try again later",
      };
    }
  } catch (err) {
    console.error("err", err);

    return {
      success: false,
      message: "Server error",
    };
  }
};
