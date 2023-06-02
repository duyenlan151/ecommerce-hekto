import { CheckBox } from '@components/Shared/Common';
import { filterColors } from './Filter.props';

export interface FilterByColorsProps {}
const classCheckBox = 'bg-pink-pattern border-pink-500 text-pink-300 focus:border-pink-500 mr-3';

export function FilterByColors(props: FilterByColorsProps) {
  return (
    <div className="my-2 border-b">
      <p className="text-blue-1 text-xl px-3 py-2">Colors</p>
      <div className="flex flex-col p-3 pt-0">
        {/* {filterColors.map((item) => (
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
