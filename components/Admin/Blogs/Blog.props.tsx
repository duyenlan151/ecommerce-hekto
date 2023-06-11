import { Badge } from '@components/Shared/Badge';
import * as yup from 'yup';

export const columns = [
  {
    key: '_id',
    title: 'Id',
    render: (_, {}, columnIndex) => <>{columnIndex + 1}</>,
  },
  {
    key: 'title',
    title: 'Title',
  },
  {
    key: 'author',
    title: 'Author',
  },
  {
    key: 'name',
    title: 'Category Name',
    render: (_, { category }, columnIndex) => <> {category[0]?.name}</>,
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

export const schemaBlog = yup
  .object({
    title: yup
      .string()
      .required('Please enter title')
      .max(1024, 'Value must be at most 1024 characters'),
    slug: yup
      .string()
      .required('Please enter slug')
      .max(1024, 'Value must be at most 1024 characters'),
    author: yup
      .string()
      .required('Please enter author')
      .max(255, 'Value must be at most 255 characters'),
    excerpt: yup
      .string()
      .required('Please enter excerpt')
      .max(255, 'Value must be at most 255 characters'),
    main_image: yup
      .array()
      .min(1, "You can't leave this blank.")
      .required("You can't leave this blank."),
    category: yup
      .object({
        value: yup.string().required('Please select category'),
      })
      .typeError('Please select status')
      .required('Please select category'),
    content: yup.string().required('Please enter content'),
    status: yup
      .object({
        value: yup.string().required('Please select status'),
      })
      .typeError('Please select status')
      .required('Please select status'),
  })
  .required();
