import { ICONS } from "../constants";
import { WeatherType } from "../types/openWeatherType";

/**
 * This function help to get the correct weather icon class name
 * https://gist.github.com/tbranyen/62d974681dea8ee0caa1
 *
 */
export const getIconClassName = (weather: WeatherType) => {
  var prefix = "wi wi-";
  var code = weather[0].id;
  var icon = ICONS[code].icon;

  // If we are not in the ranges mentioned above, add a day/night prefix.
  if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
    icon = "day-" + icon;
  }

  // Finally tack on the prefix.
  icon = `${prefix}${icon}`;

  return icon;
};

/**
 * Convert datetime to any format
 *
 * @param dt {number} datetime value
 * @param formatType {string} convert to this type
 *
 */
export const convertDateTimeToDate = (dt: number, formatType: string) => {
  let value;
  const date = new Date(dt * 1000);
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = date.getFullYear();

  if (formatType === "DDMMYYYY") {
    value = mm + "/" + dd + "/" + yyyy;
  } else if (formatType === "WDM") {
    value = date.toLocaleString(undefined, {
      month: "short",
      day: "numeric",
      weekday: "long",
    });
  } else {
    value = date.toDateString();
  }

  return value;
};
