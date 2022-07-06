/* import React, { useState, useEffect, useRef, createContext } from "react";
import { useLocation } from "../../hooks/useLocation";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const api = {
    base: "https://api.openweathermap.org/data/2.5/weather?q=",
    key: "73f63ff4eb375395f2f079f2dccf53ac",
  };

  const { location } = useLocation();
  const [data, setData] = useState([]);
  const initMount = useRef(true);

  console.log(initMount);
  console.log(location);
  console.log(data)
;
  useEffect(() => {
    if (initMount.current) {
      initMount.current = false;
      return;
    } else
      fetch(`${api.base}Osijek&appid=${api.key}&units=metric`)
        .then((response) => response.json())
        .then((json) => {
          setData(json);
        });
  }, [location]);

  return (
    <WeatherContext.Provider
      value={{
        api,
        data,
        setData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
 */
