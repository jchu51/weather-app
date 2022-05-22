import React from "react";
import { render, screen } from "@testing-library/react";
import WeatherList from "../components/weatherList/weatherList";
import { weatherListData } from "./constants/mockData";

test("<WeatherList> Component render", () => {
  render(<WeatherList data={weatherListData} title="test" />);

  const element = screen.queryByTestId("weather-list");
  expect(element).toBeInTheDocument();

  const title = screen.getByText(/test/i);
  expect(title).toBeInTheDocument();

  const date = screen.getByText(/Saturday, 21 May/i);
  expect(date).toBeInTheDocument();

  const date2 = screen.getByText(/Sunday, 22 May/i);
  expect(date2).toBeInTheDocument();
});
