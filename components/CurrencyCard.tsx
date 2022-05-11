// icons
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

// interfaces
import { CurrencyCardProps } from "../interfaces/interfaces";

const CurrencyCard = ({
  key,
  name,
  symbol,
  icon,
  tokenAmount,
  usdBalance,
}: CurrencyCardProps) => {
  return (
    <div key={key} className="py-4 px-4 justify-between flex">
      <div className="flex gap-2 items-center">
        {icon ? (
          <img src={icon} alt="currency-icon" className="w-10 h-10" />
        ) : (
          <CurrencyBitcoinIcon />
        )}
        <div className="ml-2 flex flex-col justify-center ">
          <h2 className="font-semibold">{name}</h2>
          <p className="text-sm">{symbol.toUpperCase()}</p>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="flex flex-col items-end">
          <p className="font-semibold">${usdBalance}</p>
          <p className="text-sm font-light">
            {tokenAmount.toFixed(2)} {symbol.toUpperCase()}
          </p>
        </div>
        <ChevronRightIcon />
      </div>
    </div>
  );
};

export default CurrencyCard;
