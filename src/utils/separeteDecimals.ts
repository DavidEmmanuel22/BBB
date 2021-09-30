export const separateDecimals = (priceInit: number) => {
  const price = parseFloat(priceInit.toString()).toFixed(2);

  const decimals = (price + '').split('.')[1];

  const newPrice = Math.floor(parseFloat(price))
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return {
    price: newPrice,
    decimals,
  };
};
