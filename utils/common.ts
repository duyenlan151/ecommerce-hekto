import { CountryLocals, Currency, CurrencyValue } from 'models';

export const optionsDateFormats = {
  default: {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
    timeZone: 'America/Los_Angeles',
  },
  primary: {
    timeZone: 'America/Los_Angeles',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  },
};

export const getSymbolCurrency = (value: number | string, currencyCode: Currency = 'USD') => {
  return (
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
    }).format(Number(value)) ||
    `${currencyCode === 'EUR' ? CurrencyValue.EUR : CurrencyValue.USD}${value}`
  );
};

export const formatDateTime = (
  date: number | Date | undefined | string,
  options: any = optionsDateFormats.default
) => {
  // @ts-ignore
  return new Intl.DateTimeFormat('en-US', options).format(date);
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

export const formatData = (data, keyTitle: string, keyValue: string) =>
  data.reduce(
    (newData, item) => [
      ...newData,
      { _id: item?._id, value: item[keyValue], title: item[keyTitle] },
    ],
    []
  );

export const generateSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');

export const queryString = (queryString: string) => {
  const params = new URLSearchParams(queryString);
  params.forEach((value, key) => {
    if (value == '' || value == 'undefined') params.delete(key);
  });

  return params.toString();
};
