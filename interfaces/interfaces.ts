import { ReactNode } from "react";

export interface ProviderProps {
    children: JSX.Element | JSX.Element[];
}
  
export interface ButtonParams {
    icon?: ReactNode;
    label?: string;
    className?: string;
    onClick?: () => void;
}

export interface CurrencyCardProps {
    key: string | number;
    name: string;
    symbol: string;
    icon: string;
    tokenAmount: number;
    usdBalance: number | string;
}

export interface Asset {
    usdBalance: number;
}
  
