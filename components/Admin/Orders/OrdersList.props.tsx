import { formatDateTime, getSymbolCurrency } from '@utils/common';

export const columns = [
  {
    key: '_id',
    title: 'ID',
    isSort: false,
    render: (_, {}, columnIndex) => <>{columnIndex + 1}</>,
  },
  {
    key: 'name',
    title: 'Name',
    render: (_, { shippingAddress: { firstName, lastName } }, columnIndex) => (
      <>
        {firstName} - {lastName}
      </>
    ),
  },
  {
    key: 'city',
    title: 'City',
    render: (_, { shippingAddress: { city } }, columnIndex) => <>{city}</>,
  },
  {
    key: 'country',
    title: 'Country',
    render: (_, { shippingAddress: { country } }, columnIndex) => <>{country}</>,
  },
  {
    key: 'paymentMethod',
    title: 'Payment Method',
    isSort: false,
  },
  {
    key: 'isPaid',
    title: 'Status Paid',
    isSort: false,
    render: (_, { isPaid }) => <>{isPaid ? 'Done' : 'Unpaid'}</>,
  },
  {
    key: 'isDelivered',
    title: 'Status Delivered',
    isSort: false,
    render: (_, { isDelivered }) => <>{isDelivered ? 'Delivered' : 'None'}</>,
  },
  {
    key: 'isCancelled',
    title: 'Status Cancelled',
    isSort: false,
    render: (_, { isCancelled }) => <>{isCancelled ? 'Cancelled' : 'None'}</>,
  },
  {
    key: 'itemsPrice',
    title: 'Items Price',
    isSort: false,
    render: (_, { itemsPrice }) => <>{getSymbolCurrency(itemsPrice)}</>,
  },
  {
    key: 'taxPrice',
    title: 'Tax Price',
    isSort: false,
    render: (_, { taxPrice }) => <>{getSymbolCurrency(taxPrice)}</>,
  },
  {
    key: 'shippingPrice',
    title: 'Shipping Price',
    isSort: false,
    render: (_, { shippingPrice }) => <>{getSymbolCurrency(shippingPrice)}</>,
  },
  {
    key: 'totalPrice',
    title: 'Total Price',
    isSort: false,
    render: (_, { totalPrice }) => <>{getSymbolCurrency(totalPrice)}</>,
  },
  {
    key: 'createdAt',
    title: 'Created At',
    isSort: false,
    render: (_, { createdAt }) => formatDateTime(new Date(createdAt)),
  },
];
