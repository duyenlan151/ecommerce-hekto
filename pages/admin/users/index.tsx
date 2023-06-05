import LayoutAdmin from '@components/Shared/LayoutAdmin';
import * as React from 'react';

export interface UsersPageProps {}

export default function UsersPage(props: UsersPageProps) {
  return <div>UsersPage</div>;
}
UsersPage.layout = LayoutAdmin;
UsersPage.isAdmin = true;
