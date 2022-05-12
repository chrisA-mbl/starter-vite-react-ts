import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  faHome,
  faUser,
  faSpinner,
  faHistory,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';

import WithSuspense from './WithSuspense';
import { routeNames } from '../../../util/Constants';
import RoleProtector from '../../layout/RoleProtector';

const Dogs = React.lazy(() => import('../components/Dogs'));

routes.map((route) => {
  const Component = WithSuspense(route.component);
  function WrapperComponent() {
    return (
      <RoleProtector
        // key={`route-${_.replace(route.path, /\//g, '_')}`}
        role={route?.role || 'none'}
        redirect={route.redirect || routeNames.home}
      >
        <Component />
      </RoleProtector>
    );
  }

  return {
    ...route,
    component: memo(WrapperComponent),
  };
});

export const MenuLinkRoutes = [
  ...LinkRoutes,
  {
    order: 4,
    path: `${routeNames.profile}#history`,
    role: 'any',
    title: 'Order History',
    icon: faHistory,
  },
];

function Router() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
    </Routes>
  );
}

export default Router;
