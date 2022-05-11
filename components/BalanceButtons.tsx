// hooks
import React, { useContext, useEffect, useState } from "react";

// next
import Link from "next/link";

// context
import { AppContext } from "../context/AppProvider";

//icons
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import CallMadeIcon from "@mui/icons-material/CallMade";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

//components
import Button from "./Button";

//interfaces
import { Asset } from "../interfaces/interfaces";

const BalanceButtons = () => {
  const [balance, setBalance] = useState(0);

  const { userAssets } = useContext(AppContext);

  useEffect(() => {
    let total = 0;
    userAssets.forEach((asset: Asset) => {
      total += asset.usdBalance;
    });
    setBalance(total);
  }, [userAssets]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <p className="font-semibold">Balance total</p>
        <h2 className="text-5xl font-semibold mt-4">${balance}</h2>
      </div>
      <div className="flex justify-center items-center mt-8 gap-16">
        <Button icon={<CallReceivedIcon />} label={"Recibir"} />
        <Link href="/swap">
          <a>
            <Button icon={<SwapHorizIcon />} label={"Swap"} />
          </a>
        </Link>
        <Button icon={<CallMadeIcon />} label={"Enviar"} />
      </div>
    </div>
  );
};

export default BalanceButtons;
