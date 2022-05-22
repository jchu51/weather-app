import { useState } from "react";
import isEmpty from "lodash/isEmpty";

// components
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "./components/alert/alert";
import SearchInput from "./components/searchInput/searchInput";
import WeatherCard from "./components/weatherCard/weatherCard";
import WeatherList from "./components/weatherList/weatherList";
import { useAlert } from "./contexts/alertContext";
//apis
import {
  fetchCurrentWeatherByCityName,
  fetchCurrentAndForecastWeather,
} from "./apis/weatherApi";
import {
  CurrentWeatherResopnseData,
  CurrentAndForecastWeatherReponseData,
} from "./types/openWeatherType";

import "./App.css";
import { Grid, Typography } from "@mui/material";

function App() {
  const { alert, setAlert } = useAlert();
  const [isLoading, setIsLoading] = useState(false);
  const [currenWeather, setCurrentWeather] =
    useState<CurrentWeatherResopnseData | null>(null);
  const [weeklyWeather, setWeeklyWeather] =
    useState<CurrentAndForecastWeatherReponseData | null>(null);

  const handleGetNextFiveDayWeather = async (
    currenWeather: CurrentWeatherResopnseData
  ) => {
    if (currenWeather) {
      const result = await fetchCurrentAndForecastWeather({
        lat: currenWeather.coord.lat,
        lon: currenWeather.coord.lon,
        exclude: "minutely,hourly,alerts",
      });

      if (result.success) {
        setWeeklyWeather(result.data);
      } else {
        handleShowErrorMessage(result);
        setCurrentWeather(null);
        setWeeklyWeather(null);
      }
      setIsLoading(false);
    }
  };

  const handleSearchWeather = async (text: string) => {
    if (isEmpty(text)) return;
    setIsLoading(true);
    const result = await fetchCurrentWeatherByCityName(text);

    if (result.success) {
      setCurrentWeather(result.data);
      await handleGetNextFiveDayWeather(result.data);
    } else {
      handleShowErrorMessage(result);
      setCurrentWeather(null);
      setWeeklyWeather(null);
      setIsLoading(false);
    }
  };

  const handleShowErrorMessage = (result: any) => {
    setAlert({
      ...alert,
      showAlert: true,
      message: result.message || result.data.message,
      severity: "error",
    });
  };

  return (
    <div className="App">
      <Typography
        gutterBottom
        variant="h4"
        color={"white"}
        sx={{
          marginTop: "80px",
        }}
      >
        Weather App
      </Typography>
      <SearchInput onSearch={handleSearchWeather} />
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80%",
          }}
        >
          <CircularProgress sx={{ color: "white" }} />
        </Box>
      ) : (
        <Grid container justifyContent={"space-between"}>
          <Grid item xs={12} md={6}>
            <WeatherCard data={currenWeather} title={"Current Weather"} />
          </Grid>
          <Grid item xs={12} md={6}>
            <WeatherList data={weeklyWeather} title="8-day forecast" />
          </Grid>
        </Grid>
      )}
      <Alert />
    </div>
  );
}

export default App;
