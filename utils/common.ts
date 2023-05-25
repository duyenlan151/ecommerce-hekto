import { CountryLocals, Currency, CurrencyValue } from 'models';

export const getSymbolCurrency = (currencyCode: Currency, value: number | string) => {
  return (
    new Intl.NumberFormat('en-UK', {
      style: 'currency',
      currency: currencyCode,
    }).format(Number(value)) ||
    `${currencyCode === 'EUR' ? CurrencyValue.EUR : CurrencyValue.GBP}${value}`
  );
};
