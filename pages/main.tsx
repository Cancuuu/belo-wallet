// hooks
import { useEffect, useContext } from "react";

// icons
import HistoryIcon from "@mui/icons-material/History";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BalanceButtons from "../components/BalanceButtons";

//components
import CoinList from "../components/CoinList";
import { AppContext } from "../context/AppProvider";

const Main = () => {
  const { fetchUserAssets } = useContext(AppContext);

  useEffect(() => {
    fetchUserAssets();
  }, []);

  return (
    <div className="flex flex-col p-4 bg-[#f7f7fc]">
      <nav className="flex justify-between">
        <AccountCircleIcon fontSize="large" />
        <HistoryIcon fontSize="large" />
      </nav>
      <main className="flex flex-col justify-center mt-6">
        <BalanceButtons />
        <CoinList />
      </main>
    </div>
  );
};

export default Main;
