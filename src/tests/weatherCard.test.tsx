import React from "react";
import { render, screen } from "@testing-library/react";
import WeatherCard from "../components/weatherCard/weatherCard";
import { currentWeatherData } from "./constants/mockData";

test("<WeatherCard> Component render", () => {
  render(<WeatherCard data={currentWeatherData} title="test" />);

  const element = screen.queryByTestId("weather-card");

  expect(element).toBeInTheDocument();
});

test("<WeatherCard> Component render has title", () => {
  render(<WeatherCard data={currentWeatherData} title="test" />);

  const typographyElement = screen.queryByTestId("weather-card-title");
  expect(typographyElement).toBeInTheDocument();

  const titleElement = screen.queryByText("test");

  expect(titleElement).toBeInTheDocument();
});

test("<WeatherCard> Component render without title", () => {
  render(<WeatherCard data={currentWeatherData} />);

  const typographyElement = screen.queryByTestId("weather-card-title");
  expect(typographyElement).not.toBeInTheDocument();
});

test("<WeatherCard> Component show correct data", () => {
  render(<WeatherCard data={currentWeatherData} />);

  const typographyElement = screen.queryByTestId("weather-card-country");

  expect(typographyElement).toHaveTextContent("Sydney, AU");

  const typographyElement1 = screen.queryByTestId("weather-card-date");

  expect(typographyElement1).toHaveTextContent("05/22/2022");

  const typographyElement2 = screen.queryByTestId("weather-card-body");

  expect(typographyElement2).toHaveTextContent("tempature: 16.31");
  expect(typographyElement2).toHaveTextContent("Wind speed: 6.17 m/s.");
  expect(typographyElement2).toHaveTextContent("Rain: 0.18");
  expect(typographyElement2).toHaveTextContent("Clouds: 75%");
});

test("<WeatherCard> Component weather icon", () => {
  render(<WeatherCard data={currentWeatherData} />);

  const iconElement = screen.queryByTestId("weather-card-icon");

  expect(iconElement).toBeInTheDocument();
  expect(iconElement).toHaveClass("wi wi-day-rain");
});
