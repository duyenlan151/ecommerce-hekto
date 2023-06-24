import UsersForm from '@components/Admin/Users/UsersForm';
import LayoutAdmin from '@components/Shared/Layout/LayoutAdmin';
import { UserModel } from 'models';
import { GetServerSideProps } from 'next';
import router from 'next/router';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { usersService } from 'services/Admin';

export interface UserDetailProps {
  user: UserModel;
}

export default function UserDetail({ user }: UserDetailProps) {
  return (
    <>
      <button
        onClick={() => router.back()}
        className="flex flex-1 w-full items-center focus:outline-none hover:underline pb-4 mb-4"
      >
        <AiOutlineArrowLeft />
        <span className="ml-1 text-sm">Back To Users</span>
      </button>
      <UsersForm user={user} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate');

  const id = context.params?.id;
  if (id) {
    const user = await usersService.getUserById({ id: String(id) });

    return {
      props: { user },
    };
  }
  return { props: { status: 'notfound' } };
};

UserDetail.layout = LayoutAdmin;
UserDetail.isAdmin = true;
