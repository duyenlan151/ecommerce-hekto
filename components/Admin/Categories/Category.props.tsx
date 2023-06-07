import { Badge } from '@components/Shared/Badge';
import * as yup from 'yup';

export const columns = [
  {
    key: '_id',
    title: 'Id',
    render: (_, {}, columnIndex) => <>{columnIndex + 1}</>,
  },
  {
    key: 'name',
    title: 'Category Name',
  },
  {
    key: 'slug',
    title: 'Slug',
  },
  {
    key: 'status',
    title: 'Status',
    render: (_, { status }, columnIndex) => <Badge type={status} text={status} />,
  },
];

export const items = [
  { _id: 1, title: 'Active', value: 'active' },
  { _id: 2, title: 'Archived', value: 'archived' },
  { _id: 3, title: 'Lock', value: 'lock' },
];

export const schema = yup
  .object({
    name: yup
      .string()
      .required('Please enter name')
      .max(255, 'Value must be at most 255 characters'),
    slug: yup
      .string()
      .required('Please enter slug')
      .max(255, 'Value must be at most 255 characters'),
    status: yup.object().typeError('Please select status').required('Please select status'),
  })
  .required();
