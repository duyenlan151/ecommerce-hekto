import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { AiOutlineUser } from 'react-icons/ai';

export interface UserSidebarProps {}

export function UserSidebar(props: UserSidebarProps) {
  const { data: session } = useSession();
  const router = useRouter();

  const {
    query: { tab },
  } = router;

  const handleClickItem = (tab) => {
    router.push(`/user/${tab}`);
  };
  return (
    <div className="border border-primary bg-white">
      <div className="py-3 px-3 border-b border-primary flex flex-col items-center">
        <AiOutlineUser size={25} />
        <span className="mt-3">{session?.user?.name}</span>
      </div>
      <ul className="">
        <li
          onClick={() => handleClickItem('profile')}
          className={`py-4 cursor-pointer px-3 hover:bg-gray-100 ${
            router.pathname.includes('/user/profile') && 'bg-gray-100'
          }`}
        >
          Account information
        </li>
        <li
          onClick={() => handleClickItem('orders')}
          className={`py-4 cursor-pointer px-3 hover:bg-gray-100  ${
            router.pathname.includes('/user/orders') && 'bg-gray-100'
          }`}
        >
          My order
        </li>
        <li
          onClick={() => signOut({ callbackUrl: '/' })}
          className={`py-4 cursor-pointer px-3 hover:bg-gray-100`}
        >
          Log out
        </li>
      </ul>
    </div>
  );
}
