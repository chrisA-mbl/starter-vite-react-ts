import {
  Person,
  Aod,
  ApiRounded,
  DashboardOutlined,
} from '@mui/icons-material';
import DogsSelector from '../components/Dogs';
import HelloWorld from '../components/HelloWorld';
import LoginPage from '../components/LoginPage';

export const routeTitle = {
  Dogs: 'Dogs',
  Dashboard: 'Dashboard',
  home: 'home',
  // Users: 'Users',
  // Forum: 'Forum',
  // Analytics: 'Analytics',
  // Folder: 'Folder',
  // Edit: 'Edit',
  // resetPassword: 'reset-password',
};
export const routeNames = {
  Dogs: 'Dogs',
  Dashboard: 'Dashboard',
  home: '',
  // Users: 'Users',
  // Forum: 'Forum',
  // Analytics: 'Analytics',
  // Folder: 'Folder',
  // Edit: 'Edit',
  // resetPassword: 'reset-password',
};

export const LinkRoutes = [
  {
    path: routeNames.Dogs,
    component: DogsSelector,
    title: 'Dogs',
    icon: Person,
  },
  {
    path: routeNames.Dashboard,
    component: HelloWorld,
    title: 'Dashboard',
    icon: Aod,
  },
  {
    order: 3,
    path: routeNames.home,
    component: LoginPage,
    role: 'any',
    title: 'Profile',
    icon: ApiRounded,
  },
  // {
  //   order: 5,
  //   path: routeNames.trackOrders,
  //   component: TrackOrders,
  //   role: 'any',
  //   title: 'Track your Orders',
  //   icon: faSpinner,
  // },
];

export const routes = [
  ...LinkRoutes,
  // {
  //   path: routeNames.restaurant,
  //   component: Restaurant,
  // },
  // {
  //   path: routeNames.checkout,
  //   component: Checkout,
  // },
  // {
  //   path: routeNames.trackOrder,
  //   component: TrackOrder,
  //   role: 'any',
  // },
  // {
  //   path: routeNames.orderSuccess,
  //   component: OrderSuccess,
  // },
  // {
  //   path: routeNames.trackOrders,
  //   component: TrackOrders,
  // },
  // {
  //   path: routeNames.resetPassword,
  //   component: ResetPassword,
  // },
  // {
  //   path: '*',
  //   component: NotFoundPage,
  // },
];
// export const routeNames = {
//   Search: `/${routTitle.Search}`,
//   Dashboard: `/${routTitle.Dashboard}`,
//   home: '/',
//   Users: `/${routTitle.Users}`,
//   Forum: `/${routTitle.Forum}`,
//   Analytics: `/${routTitle.Analytics}`,
//   Folder: `/${routTitle.Folder}`,
//   Edit: `/${routTitle.Edit}`,
//   resetPassword: `/${routTitle.resetPassword}`,
// };

export const navbarList = [
  {
    icon: ApiRounded,
    desc: routeTitle.Dogs,
    secondDesc: '',
    routeNames: routeNames.Dogs,
    badge: 0,
    subList: [],
  },
  {
    icon: DashboardOutlined,
    desc: 'Dashboard',
    secondDesc: 'New User',
    routeNames: routeNames.Dashboard,

    badge: 2,
    subList: [],
  },
  {
    icon: Person,
    desc: 'Users',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  // {
  //   icon: Forum,
  //   desc: 'Forum',
  //   secondDesc: 'Message from andi',
  //   badge: 4,
  //   subList: [
  //     {
  //       desc: 'chat',
  //       badge: 4,
  //     },
  //     {
  //       desc: 'reminder',
  //       badge: 0,
  //     },
  //   ],
  // },
  // {
  //   icon: Analytics,
  //   desc: 'Analytics',
  //   secondDesc: '',
  //   badge: 0,
  //   subList: [],
  // },
  // {
  //   icon: FolderOpen,
  //   desc: 'Folder',
  //   secondDesc: '',
  //   badge: 0,
  //   subList: [
  //     {
  //       icon: DashboardOutlined,
  //       desc: 'Dashboard',
  //       secondDesc: '',
  //       badge: 0,
  //     },
  //   ],
  // },
  // {
  //   icon: BorderColor,
  //   desc: 'Edit',
  //   secondDesc: '',
  //   badge: 0,
  //   subList: [],
  // },
];

export default navbarList;

function OverridableComponent<T>() {
  throw new Error('Function not implemented.');
}
