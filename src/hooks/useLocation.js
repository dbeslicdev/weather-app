import React, { useState } from "react";

export const useLocation = () => {
  const [location, setLocation] = useState("");

  return { location, setLocation };
};
