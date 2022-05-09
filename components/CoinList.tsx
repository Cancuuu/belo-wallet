// hooks
import React, { useContext, useEffect } from "react";

//provider
import { AppContext } from "../context/AppProvider";

// components
import CurrencyCard from "./CurrencyCard";

const CoinList = () => {
  const { userAssets } = useContext(AppContext);

  return (
    <div className="flex flex-col mt-8">
      <p className="font-semibold">Monedas</p>
      <div className="rounded-xl mt-4 bg-white">
        {userAssets.map((coin: any, index: any) => {
          if (index > 5) {
            return;
          }

          return (
            <CurrencyCard
              key={coin.id}
              icon={coin.image.large || coin.image.thumb}
              name={coin.name || "Token!"}
              tokenAmount={coin.tokenAmount || 0}
              usdBalance={coin.usdBalance || 0}
              symbol={coin.symbol || ""}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CoinList;
