import { CountryLocals, Currency, CurrencyValue } from 'models';

export const getSymbolCurrency = (currencyCode: Currency = 'EUR', value: number | string) => {
  return (
    new Intl.NumberFormat('en-UK', {
      style: 'currency',
      currency: currencyCode,
    }).format(Number(value)) ||
    `${currencyCode === 'EUR' ? CurrencyValue.EUR : CurrencyValue.GBP}${value}`
  );
};

// export const urlFor = (source: any) => builder.image(source);

export const initialOptionsPayPal = {
  'client-id': 'ATJugsItr_Bl6jP1_uhJOdKIia4aS4rMjROZtGqkP0_ctIZ9MRzQytZpcYO4I42AX-UohqkKJZhCEF2l',
  currency: 'USD',
  intent: 'capture',
  'data-client-token': 'access_token$sandbox$787bmf4bqq85zwft$058df35f387d4f349dc93790ce60f55c',
};

export const getError = (err) =>
  err.response && err.response.data && err.response.data.message
    ? err.response.data.message
    : err.message;
