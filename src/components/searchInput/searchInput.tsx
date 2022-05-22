import {
  MouseEvent,
  KeyboardEvent,
  ChangeEvent,
  FunctionComponent,
  useState,
} from "react";
import clsx from "clsx";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import { KEYBOARD_KEY } from "../../constants/index";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.9),
  },
  width: "360px",
  margin: "16px 0",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

interface ISearchInputProps {
  className?: string;
  onSearch: (searchText: string) => void;
}

const SearchInput: FunctionComponent<ISearchInputProps> = (props) => {
  const { onSearch, className } = props;
  const [input, setInput] = useState<string>("");

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleSearch = async (
    e: MouseEvent | KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (
      e.type === "click" ||
      (e.type === "keydown" && (e as KeyboardEvent).key === KEYBOARD_KEY.enter)
    ) {
      await onSearch(input.trim());
    }
  };

  return (
    <Search
      data-testid="search-input"
      className={clsx("search-input", className)}
    >
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Weather in your city"
        inputProps={{ "aria-label": "Weather in your city" }}
        onChange={handleOnChange}
        onKeyDown={handleSearch}
        value={input}
      />
    </Search>
  );
};

export default SearchInput;
