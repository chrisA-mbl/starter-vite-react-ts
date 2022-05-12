import DashboardOutlined from '@mui/icons-material/DashboardOutlined';
import Person from '@mui/icons-material/Person';
import Forum from '@mui/icons-material/Forum';
import Analytics from '@mui/icons-material/Analytics';
import FolderOpen from '@mui/icons-material/FolderOpen';
import BorderColor from '@mui/icons-material/BorderColor';
import Search from '@mui/icons-material/Search';
import DogsSelector from '../components/Dogs';
export const routTitle = {
  Dogs: 'Dogs',
  // Dashboard: 'Dashboard',
  // home: '',
  // Users: 'Users',
  // Forum: 'Forum',
  // Analytics: 'Analytics',
  // Folder: 'Folder',
  // Edit: 'Edit',
  // resetPassword: 'reset-password',
};
export const routeNames = {
  Dogs: 'Dogs',
  // Dashboard: 'Dashboard',
  // home: '',
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
  // {
  //   order: 2,
  //   path: routeNames.restaurants,
  //   component: Restaurants,
  //   title: 'Restaurants',
  //   icon: faUtensils,
  // },
  // {
  //   order: 3,
  //   path: routeNames.profile,
  //   component: Profile,
  //   role: 'any',
  //   title: 'Profile',
  //   icon: faUser,
  // },
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
    icon: Search,
    desc: routTitle.Dogs,
    secondDesc: '',
    routeNames: routeNames.Search,
    badge: 0,
    subList: [],
  },
  // {
  //   icon: DashboardOutlined,
  //   desc: 'Dashboard',
  //   secondDesc: 'Help me',
  //   routeNames: routeNames.Dashboard,

  //   badge: 2,
  //   subList: [],
  // },
  // {
  //   icon: Person,
  //   desc: 'Users',
  //   secondDesc: '',
  //   badge: 0,
  //   subList: [],
  // },
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
