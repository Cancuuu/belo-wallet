import React, { createContext, useState, useEffect } from "react";

import { generateUserBalance } from "../utils/generateBalance";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [apiTokens, setApiTokens] = useState([]);
  const [userUsdBalance, setUserUsdBalance] = useState(0);
  const [userAssets, setUserAssets] = useState([]);

  const fetchUserAssets = async () => {
    const userAssets = await generateUserBalance();
    setUserAssets(userAssets.filledAssets);
    setUserUsdBalance(userAssets.totalUsdBalance);
  };

  return (
    <AppContext.Provider
      value={{
        apiTokens,
        userUsdBalance,
        userAssets,
        fetchUserAssets,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
