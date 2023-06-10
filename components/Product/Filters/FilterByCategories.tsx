import { CheckBox } from '@components/Shared/Common';
import { useCategories } from '@hooks/useCategories';
import { useRouterPush } from '@hooks/useRouterPush';
import { formatData } from '@utils/common';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export interface FilterByCategoriesProps {}

interface Categories {
  _id: string;
  name: string;
  title: string;
  value: string;
}

const classCheckBox = '!text-pink-300 !border-pink-500 focus:!border-pink-500 mr-3';

export function FilterByCategories(props: FilterByCategoriesProps) {
  const { loading: loadingCategory, handleCategory } = useCategories();
  const [categories, setCategories] = useState<Categories[]>([]);
  const form = useForm();

  const router = useRouter();
  const { routerPushQuery } = useRouterPush();

  const {
    query: { category },
  } = router;

  const {
    formState: { errors },
    control,
  } = form;

  useEffect(() => {
    (async () => {
      const result = await handleCategory({}, 'get', 'active');
      setCategories(formatData(result?.data, 'name', 'slug'));
    })();
  }, []);

  const handleCheckbox = (e) => {
    const { target } = e;
    const { name } = target;

    routerPushQuery({
      query: {
        ...router.query,
        category: name,
      },
    });
  };

  return (
    <div className="my-2 border-b">
      <p className="text-blue-1 text-xl px-3 py-2">Categories</p>
      <div className="flex flex-col p-3 pt-0">
        {categories &&
          categories.map((item) => (
            <div className="my-2" key={item?._id}>
              <CheckBox
                control={control}
                // value={item?.value}
                label={item?.title}
                name={item?.value}
                className={classCheckBox}
                onChange={handleCheckbox}
                checked={item?.value === String(category)}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
