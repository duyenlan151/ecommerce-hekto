import DashboardPage from './dashboard';
// layout for page
import LayoutAdmin from '@components/Shared/LayoutAdmin';
export default function AdminPage() {
  return (
    <div className="font-lato">
      <DashboardPage />
    </div>
  );
}

AdminPage.layout = LayoutAdmin;
