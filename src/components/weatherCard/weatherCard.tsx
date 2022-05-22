import * as React from "react";
import isNil from "lodash/isNil";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// types
import { CurrentWeatherResopnseData } from "../../types/openWeatherType";

import { convertDateTimeToDate, getIconClassName } from "../../utils/helper";

interface ICard {
  data: CurrentWeatherResopnseData | null;
  title?: string;
}

const WeatherCard = (props: ICard) => {
  const { data, title } = props;

  if (isNil(data)) return null;
  const { main, name, sys, dt, wind, rain, clouds, weather } = data;

  const date = convertDateTimeToDate(dt, "DDMMYYYY");

  return (
    <Grid
      data-testid="weather-card"
      container
      alignItems={"center"}
      flexDirection="column"
    >
      {title && (
        <Typography
          data-testid="weather-card-title"
          gutterBottom
          variant="h5"
          component="div"
          color={"white"}
        >
          {title}
        </Typography>
      )}
      <Card sx={{ maxWidth: 360 }}>
        <CardContent>
          <Typography
            data-testid="weather-card-country"
            gutterBottom
            variant="h6"
            component="div"
          >
            {name}, {sys.country}
          </Typography>
          <Typography
            data-testid="weather-card-date"
            gutterBottom
            variant="body2"
            component="div"
          >
            {date}
          </Typography>
          <Typography
            data-testid="weather-card-body"
            variant="body2"
            color="text.secondary"
            component="div"
            sx={{
              display: "flex",
            }}
          >
            <Grid container>
              {main && (
                <Grid item xs={12}>
                  tempature: {main.temp}
                </Grid>
              )}
              {wind && (
                <Grid item xs={12}>
                  Wind speed: {wind.speed} m/s.
                </Grid>
              )}
              {rain && (
                <Grid item xs={12}>
                  Rain: {rain["1h"]}
                </Grid>
              )}
              {clouds && (
                <Grid item xs={12}>
                  Clouds: {clouds.all}%
                </Grid>
              )}
            </Grid>
            <Grid container alignItems={"center"} justifyContent="center">
              <Grid item>
                <i
                  data-testid="weather-card-icon"
                  style={{ fontSize: 50 }}
                  className={getIconClassName(weather)}
                />
              </Grid>
            </Grid>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default WeatherCard;
