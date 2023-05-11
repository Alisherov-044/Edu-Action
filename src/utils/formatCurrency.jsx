let DOLLAR = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumSignificantDigits: 3,
});

function formatCurrency(number) {
  return DOLLAR.format(number);
}

export default formatCurrency;
