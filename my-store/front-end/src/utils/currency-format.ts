/* eslint-disable no-undef */
const currencyFormat = (value: number) => {
  if (typeof value !== "number") return "";

  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

export default currencyFormat;
