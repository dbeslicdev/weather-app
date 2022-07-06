/* import React, { useEffect, useState, useRef } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  return {
    data,
  };
};
 */
