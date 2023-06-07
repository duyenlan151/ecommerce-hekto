import { ILoading } from '@components/Icons';
import { DropdownSelect } from '@components/Shared/Dropdowns';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUsers } from '@hooks/index';
import { formatDateTime } from '@utils/common';
import { UserModel } from 'models';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { items, schema } from './Users.props';

export interface UsersFormProps {
  user: Partial<UserModel>;
}

export default function UsersForm({ user }: UsersFormProps) {
  const { _id, name, status, createdAt, email, isAdmin } = user;
  const router = useRouter();
  const { loading, handleUser } = useUsers();
  const {
    query: { slug },
  } = router;

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      ...user,
      status: {
        title: status,
        value: status,
      },
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = form;

  const onSubmit = async (user) => {
    const {
      status: { value },
    } = user;
    const statusCode = await handleUser({ _id, status: value }, 'edit');

    if (statusCode) {
      router.back();
    }
  };

  return (
    <div className="relative min-w-0 break-words w-full mb-6 rounded">
      <h4 className="font-bold tracking-wider mt-10 mb-4 border-b font-josefinsans-bold text-4xl text-black font-bold pb-5 mb-8 border-b">
        User Detail
      </h4>
      <form onSubmit={handleSubmit(onSubmit)} className="lg:p-6 p-4 bg-white">
        <div className="flex items-center mb-4">
          <div className="min-w-[100px]">Name: </div>
          <div>{name}</div>
        </div>
        <div className="flex items-center mb-4">
          <div className="min-w-[100px]">Email: </div>
          <div>{email}</div>
        </div>
        <div className="flex items-center mb-4">
          <div className="min-w-[100px]">Created At: </div>
          <div>{formatDateTime(new Date(createdAt || ''))}</div>
        </div>
        <div className="flex items-center mb-4">
          <div className="min-w-[100px]">Role: </div>
          <div>{isAdmin ? 'Admin' : 'User'}</div>
        </div>
        {!isAdmin && (
          <DropdownSelect
            label="Status"
            name="status"
            control={control}
            placeholder={'Please select'}
            items={items}
          />
        )}
        <div className="flex justify-end w-full flex-end">
          {!isAdmin && (
            <>
              <button
                type="submit"
                disabled={loading}
                className={`bg-green-500 ${
                  loading && 'opacity-50'
                } shadow text-white py-2 px-10 mt-4 capitalize font-bold focus:outline-none`}
              >
                {loading ? <ILoading /> : slug === 'add' ? 'Add' : 'save'}
              </button>
              {/* <button
                type="submit"
                disabled={loading}
                className={`bg-red-500 ${
                  loading && 'opacity-50'
                } shadow text-white py-2 px-10 ml-4 mt-4 capitalize font-bold focus:outline-none`}
              >
                {loading ? <ILoading /> : 'Delete'}
              </button> */}
            </>
          )}
          <button
            onClick={() => router.back()}
            disabled={loading}
            type="button"
            className={`bg-transparent shadow text-black py-2 px-8 mt-4 capitalize border ml-4 focus:outline-none ${
              loading && 'opacity-50'
            }`}
          >
            cancel
          </button>
        </div>
      </form>
    </div>
  );
}
