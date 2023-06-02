import { CheckBox } from '@components/Shared/Common';
import { filterBrand } from './Filter.props';

export interface FilterByBrandProps {}
const classCheckBox =
  'bg-brand-pattern !border-blue-300 !text-blue-500 !focus:border-blue-300 mr-3';

export function FilterByBrand(props: FilterByBrandProps) {
  return (
    <div className="border-b">
      <p className="text-blue-1 text-xl px-3 py-2">Brand</p>
      <div className="flex flex-col p-3 pt-0">
        {/* {filterBrand.map((item) => (
          <div className="my-2" key={item.id}>
            <CheckBox
              value={item.value}
              label={item.label}
              name={item.value}
              className={classCheckBox}
            />
          </div>
        ))} */}
      </div>
    </div>
  );
}
