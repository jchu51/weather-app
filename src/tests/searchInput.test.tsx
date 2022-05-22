import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "../components/searchInput/searchInput";

test("<SearchInput> Component render and class name", () => {
  const handleSearch = jest.fn();
  render(<SearchInput onSearch={handleSearch} className="test" />);

  const element = screen.queryByTestId("search-input");

  expect(element).toBeInTheDocument();
  expect(element).toHaveClass("test");
});

test("<SearchInput> Component onSearch function", () => {
  const handleSearch = jest.fn();
  render(<SearchInput onSearch={handleSearch} className="test" />);

  const inputElement = screen.getByPlaceholderText("Weather in your city");

  fireEvent.keyDown(inputElement, {
    key: "Enter",
    code: "Enter",
    charCode: 13,
  });
  expect(handleSearch).toHaveBeenCalledTimes(1);
});
