// hooks
import { useEffect, useContext, useState } from "react";

// icons
import HistoryIcon from "@mui/icons-material/History";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BalanceButtons from "../components/BalanceButtons";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

//next
import Link from "next/link";

//components
import CoinList from "../components/CoinList";
import { AppContext } from "../context/AppProvider";
import Button from "../components/Button";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  NativeSelect,
  ButtonBase,
} from "@mui/material";

const Swap = () => {
  const {} = useContext(AppContext);

  const [tokensToSwap, setTokensToSwap] = useState(["BTC", "ETH"]);

  return (
    <div className="flex flex-col p-4 bg-[#f7f7fc]">
      <nav className="flex justify-between">
        <Link href="/">
          <a>
            <ArrowBackIcon fontSize="large" />
          </a>
        </Link>
        <HistoryIcon fontSize="large" />
      </nav>
      <main className="flex flex-col justify-center mt-6">
        <h2 className="text-4xl font-semibold">Swap</h2>
        <div className="flex flex-col justify-center items-center mt-8 gap-4">
          <div className="flex justify-center items-center gap-3">
            <input
              type="number"
              className="w-64 px-2 py-4 text-4xl outline-none appearance-none"
            />
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Token
              </InputLabel>
              <NativeSelect
                defaultValue={30}
                inputProps={{
                  name: "age",
                  id: "uncontrolled-native",
                }}
              >
                <option value={10}>BTC</option>
                <option value={20}>ETH</option>
                <option value={30}>USDC</option>
              </NativeSelect>
            </FormControl>
          </div>
          <div className="flex justify-center items-center">
            <Button
              className="rotate-90"
              icon={<SwapHorizIcon />}
              onClick={() => console.log("hello")}
            />
          </div>
          <div className="flex justify-center items-center gap-3">
            <input
              type="number"
              className="w-64 px-2 py-4 text-4xl outline-none appearance-none"
            />
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Token
              </InputLabel>
              <NativeSelect
                defaultValue={10}
                inputProps={{
                  name: "age",
                  id: "uncontrolled-native",
                }}
              >
                <option value={10}>BTC</option>
                <option value={20}>ETH</option>
                <option value={30}>USDC</option>
              </NativeSelect>
            </FormControl>
          </div>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <ButtonBase
            disabled={false}
            className="border-2 px-8 py-2 rounded-xl bg-white"
          >
            Swap
          </ButtonBase>
        </div>
      </main>
    </div>
  );
};

export default Swap;
