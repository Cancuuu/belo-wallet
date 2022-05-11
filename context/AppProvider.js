import React, { createContext, useState } from "react";

import { generateFirstUserBalance } from "../utils/generateBalance";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [apiTokens, setApiTokens] = useState([]);
  const [userAssets, setUserAssets] = useState([]);

  const fetchUserAssets = async () => {
    if (localStorage.getItem("userAssets")) {
      setUserAssets(JSON.parse(localStorage.getItem("userAssets")));
    } else {
      const userAssets = await generateFirstUserBalance();

      localStorage.setItem("userAssets", JSON.stringify(userAssets));

      setUserAssets(userAssets);
    }
  };

  return (
    <AppContext.Provider
      value={{
        apiTokens,
        userAssets,
        fetchUserAssets,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
