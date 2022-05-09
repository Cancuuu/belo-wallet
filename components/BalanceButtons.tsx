// hooks
import React, { useContext } from "react";

// context
import { AppContext } from "../context/AppProvider";

//icons
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import CallMadeIcon from "@mui/icons-material/CallMade";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

//components
import Button from "./Button";

const BalanceButtons = () => {
  const { userUsdBalance } = useContext(AppContext);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <p className="font-semibold">Balance total</p>
        <h2 className="text-5xl font-semibold mt-4">${userUsdBalance}</h2>
      </div>
      <div className="flex justify-center items-center mt-8 gap-16">
        <Button icon={<CallReceivedIcon />} label={"Recibir"} />
        <Button icon={<SwapHorizIcon />} label={"Swap"} />
        <Button icon={<CallMadeIcon />} label={"Enviar"} />
      </div>
    </div>
  );
};

export default BalanceButtons;
