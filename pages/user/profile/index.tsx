import { UserInfo } from '@components/Users';
import LayoutProfile from '../layout';

export interface ProfileUserPageProps {}

export default function ProfileUserPage(props: ProfileUserPageProps) {
  return (
    <LayoutProfile>
      <UserInfo />
    </LayoutProfile>
  );
}

ProfileUserPage.authorize = true;
