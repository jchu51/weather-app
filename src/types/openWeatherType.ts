export type WeatherType = Array<{
  id: number;
  main: string;
  description: string;
  icon: string;
}>;

export type CoordType = {
  lon: number;
  lat: number;
};
export type MainType = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
  temp_kf?: number;
};

export type WindType = {
  speed: number;
  deg: number;
  gust?: number;
};

export type RainType = {
  "1h"?: number;
  "3h"?: number;
};

export type CloudsType = {
  all: number;
};

export type SysType = {
  type?: number;
  id?: number;
  country?: string;
  sunrise?: number;
  sunset?: number;
  pod?: string;
};

export type CityType = {
  id: number;
  name: string;
  coord: CoordType;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};

export type CurrentWeatherResopnseData = {
  coord: CoordType;
  weather: WeatherType;
  base: string;
  main: MainType;
  visibility: number;
  wind: WindType;
  rain: RainType;
  clouds: CloudsType;
  dt: number;
  sys: SysType;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type FiveDayWeatherResopnseData = {
  cod: string;
  message: number;
  cnt: number;
  list: Array<{
    dt: number;
    main: MainType;
    weather: WeatherType;
    clouds: CloudsType;
    wind: WindType;
    visibility: number;
    pop: number;
    sys: SysType;
    dt_txt: string;
  }>;
  city: CityType;
};
export type CurrentType = {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: WeatherType;
};
export type DailyType = {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: WeatherType;
  clouds: number;
  rain?: number;
  pop: number;
  uvi: number;
  [key: string]: any;
};
export type CurrentAndForecastWeatherReponseData = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: CurrentType;
  daily: Array<DailyType>;

  //TODO - for now other data is any type
  [key: string]: any;
};
