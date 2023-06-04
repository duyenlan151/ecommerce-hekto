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
    images: yup
      .array()
      .min(3, "You can't leave this blank.")
      .max(20, 'Maxium image you can upload is 20 images ')
      .required("You can't leave this blank."),
    category: yup.string().required('Please select category'),
    short_description: yup.string().required('Please enter short description'),
    // .max(255, 'Value must be at most 999999 characters'),
    discount_percentage: yup
      .string()
      .required('Please enter discount percentage')
      .max(255, 'Value must be at most 3 characters'),
    rating: yup
      .string()
      .required('Please enter rating')
      .max(255, 'Value must be at most 1 characters'),
    price: yup
      .string()
      .required('Please enter price')
      .max(255, 'Value must be at most 3 characters'),
  })
  .required();
