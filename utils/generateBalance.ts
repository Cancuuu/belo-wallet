
// Generate a USD balance of the first 5 tokens that the API returns
export const generateFirstUserBalance = async () => {
    const data = await fetch("https://api.coingecko.com/api/v3/coins/");
    const res = await data.json();

    const tokens = res.slice(0, 6);
    let totalUsdBalance = 0;

    let filledAssets = [];
    filledAssets = tokens.map((token: any) => {
      const usdBalance = Math.ceil(Math.random() * 1000);

      totalUsdBalance += usdBalance;

      const tokenAmount = usdBalance / token.market_data.current_price.usd;

      const balancedTokens = (
        token.balance = {
          ...token,
          usdBalance,
          tokenAmount,
        }
      );

      return balancedTokens;
    });

    return filledAssets
};


export const getUsdPrice = async (token: string) => {
  const data = await fetch(`https://api.coingecko.com/api/v3/coins/${token}`);
  const res = await data.json();

  return res.market_data.current_price.usd;
}



