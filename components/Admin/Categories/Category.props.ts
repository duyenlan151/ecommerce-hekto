import * as yup from 'yup';

export const columns = [
  {
    key: '_id',
    title: 'Id',
  },
  {
    key: 'name',
    title: 'Category Name',
  },
  {
    key: 'slug',
    title: 'Slug',
  },
];

export const items = [
  { id: 1, title: 'Active', value: 'active' },
  { id: 2, title: 'Archived', value: 'archived' },
  { id: 3, title: 'Lock', value: 'lock' },
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
    status: yup.string().required('Please select status'),
  })
  .required();
