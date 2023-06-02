import { CheckBox } from '@components/Shared/Common';
import { useForm } from 'react-hook-form';
import { filterCategories } from './Filter.props';

export interface FilterByCategoriesProps {}

const classCheckBox = '!text-pink-300 !border-pink-500 focus:!border-pink-500 mr-3';

export function FilterByCategories(props: FilterByCategoriesProps) {
  const form = useForm();

  const {
    formState: { errors },
    control,
  } = form;
  return (
    <div className="my-2 border-b">
      <p className="text-blue-1 text-xl px-3 py-2">Categories</p>
      <div className="flex flex-col p-3 pt-0">
        {filterCategories.map((item) => (
          <div className="my-2" key={item.id}>
            <CheckBox
              control={control}
              value={item.value}
              label={item.label}
              name={item.value}
              className={classCheckBox}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
