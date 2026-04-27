import { Routes, Route } from 'react-router-dom';
import { AuthPage } from '../../features/auth/pages/AuthPage.jsx';
import { DashboardPage } from '../layouts/DashboardPage.jsx';
import { VerifyEmailPage } from '../../features/auth/pages/VerifyEmailPage.jsx';
import { ProtectedRoutes } from './ProtectedRoutes.jsx';
import { UnauthorizedPage } from '../../features/auth/pages/UnauthorizedPage.jsx';
import { Fields } from '../../features/fields/components/Fields.jsx';
import { Teams } from '../../features/teams/components/Teams.jsx';
import { Tournaments } from '../../features/tournaments/components/Tournaments.jsx';
import { Users } from '../../features/users/components/Users.jsx';
import { Reservations } from '../../features/reservation/components/Reservations.jsx';
import { RoleGuard } from './RoleGuard.jsx';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<AuthPage />} />
      <Route path='/unauthorized' element={<UnauthorizedPage />} />
      <Route path='/verify-email' element={<VerifyEmailPage />} />
      <Route
        path='/dashboard/*'
        element={
          <ProtectedRoutes>
            <RoleGuard allowedRoles={['ADMIN_ROLE']}>
              <DashboardPage />
            </RoleGuard>
          </ProtectedRoutes>
        }
      >
        <Route path='fields' elements={<Fields />} />
        <Route path='teams' elements={<Teams />} />
        <Route path='reservations' elements={<Reservations />} />
        <Route path='tournaments' elements={<Tournaments />} />
        <Route path='users' elements={<Users />} />
      </Route>
    </Routes>
  );
};
