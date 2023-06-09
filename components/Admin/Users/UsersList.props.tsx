import { Badge } from '@components/Shared/Badge';
import { formatDateTime } from '@utils/common';

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
  },
  {
    key: 'email',
    title: 'Email',
    isSort: false,
  },
  {
    key: 'createdAt',
    title: 'Created At',
    isSort: false,
    render: (_, { createdAt }) => formatDateTime(new Date(createdAt || 0)),
  },
  {
    key: 'status',
    title: 'Status',
    isSort: false,
    render: (_, { status }) => <Badge type={status} text={status} />,
  },
  {
    key: 'isAdmin',
    title: 'Admin',
    isSort: false,
    render: (_, { isAdmin }) => (isAdmin ? 'True' : 'False'),
  },
];
