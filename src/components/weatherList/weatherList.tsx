import * as React from "react";
import isNil from "lodash/isNil";

import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import { convertDateTimeToDate, getIconClassName } from "../../utils/helper";
import {
  CurrentAndForecastWeatherReponseData,
  DailyType,
} from "../../types/openWeatherType";

interface IWeatherList {
  data: CurrentAndForecastWeatherReponseData | null;
  title?: string;
}

export default function WeatherList(props: IWeatherList) {
  const { data, title } = props;
  if (isNil(data)) return null;

  return (
    <Grid
      data-testid="weather-list"
      container
      alignItems={"center"}
      flexDirection="column"
    >
      {title && (
        <Typography gutterBottom variant="h5" component="div" color={"white"}>
          {title}
        </Typography>
      )}
      <List sx={{ width: "100%", maxWidth: 360 }}>
        {data.daily.map((item: DailyType, i: number) => {
          const { temp, wind_speed, dt, clouds, weather, rain } = item;
          const date = convertDateTimeToDate(dt, "WDM");
          return (
            <ListItem
              key={i}
              sx={{
                bgcolor: "background.paper",
                borderRadius: "4px",
                marginBottom: "16px",
                boxShadow:
                  "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
              }}
            >
              <ListItemAvatar
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexBasis: "30%",
                }}
              >
                <i
                  style={{ fontSize: 35 }}
                  className={getIconClassName(weather)}
                />
              </ListItemAvatar>
              <ListItemText
                sx={{
                  flexBasis: "70%",
                }}
                primary={date}
                secondary={
                  <>
                    <Grid container component={"span"} flexDirection={"column"}>
                      <Grid item component={"span"}>
                        {weather[0].description}
                      </Grid>
                      <Grid item component={"span"}>
                        {temp.max} / {temp.min}°C
                      </Grid>
                      <Grid item component={"span"}>
                        Clouds: {clouds}%
                      </Grid>
                      <Grid item component={"span"}>
                        Rain: {rain}
                      </Grid>
                      <Grid item component={"span"}>
                        Wind speed: {wind_speed} m/s
                      </Grid>
                    </Grid>
                  </>
                }
              />
            </ListItem>
          );
        })}
      </List>
    </Grid>
  );
}
