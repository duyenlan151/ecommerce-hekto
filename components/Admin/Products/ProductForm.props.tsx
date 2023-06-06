import { Badge } from '@components/Shared/Badge';
import * as yup from 'yup';

export const columns = [
  {
    key: 'id',
    title: 'ID',
    isSort: false,
    render: (_, item, columnIndex) => {
      columnIndex + 1;
    },
  },
  {
    key: 'title',
    title: 'Title',
  },
  {
    key: 'description',
    title: 'Description',
    isSort: false,
  },
  {
    key: 'short_description',
    title: 'Short description',
    isSort: false,
  },
  {
    key: 'slug',
    title: 'Slug',
    isSort: false,
  },
  {
    key: 'category',
    isSort: false,
    title: 'Category Name',
    render: (_, { category }, columnIndex) => {
      return category[0]?.name;
    },
  },
  {
    key: 'status',
    title: 'Status',
    render: (_, { status }, columnIndex) => <Badge type={status} text={status} />,
  },
];

export const items = [
  { id: 1, title: 'Active', value: 'active' },
  { id: 2, title: 'Archived', value: 'archived' },
  { id: 3, title: 'Lock', value: 'lock' },
];

export const schemaProduct = yup
  .object({
    title: yup
      .string()
      .required('Please enter title')
      .max(255, 'Value must be at most 1024 characters'),
    description: yup
      .string()
      .required('Please enter description')
      .max(255, 'Value must be at most 1024 characters'),
    images: yup.array(),
    // .min(3, "You can't leave this blank.")
    // .max(20, 'Maxium image you can upload is 20 images ')
    // .required("You can't leave this blank."),
    category: yup.object().required('Please select category'),
    short_description: yup.string().required('Please enter short description'),
    discount_percentage: yup
      .number()
      .required('Please enter discount percentage')
      .min(0, 'Value must be at least 0 percent')
      .max(30, 'Value must be at most 30 percent')
      .typeError('Please enter number'),
    rating: yup
      .number()
      .required('Please enter rating')
      .min(0, 'Value must be at most 0 star')
      .max(5, 'Value must be at most 5 star')
      .typeError('Please enter number'),
    price: yup
      .number()
      .required('Please enter price')
      .min(1, 'Value must be at least $1')
      .typeError('Please enter number'),
    status: yup.object().required('Please select status'),
  })
  .required();
