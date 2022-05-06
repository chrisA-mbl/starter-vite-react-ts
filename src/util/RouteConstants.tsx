import DashboardOutlined from '@mui/icons-material/DashboardOutlined';
import Person from '@mui/icons-material/Person';
import Forum from '@mui/icons-material/Forum';
import Analytics from '@mui/icons-material/Analytics';
import FolderOpen from '@mui/icons-material/FolderOpen';
import BorderColor from '@mui/icons-material/BorderColor';
import Search from '@mui/icons-material/Search';

export const routTitle = {
  Search: 'Search',
  Dashboard: 'Dashboard',
  home: '',
  Users: 'Users',
  Forum: 'Forum',
  Analytics: 'Analytics',
  Folder: 'Folder',
  Edit: 'Edit',
  resetPassword: 'reset-password',
};

export const routeNames = {
  Search: `/${routTitle.Search}`,
  Dashboard: `/${routTitle.Dashboard}`,
  home: '/',
  Users: `/${routTitle.Users}`,
  Forum: `/${routTitle.Forum}`,
  Analytics: `/${routTitle.Analytics}`,
  Folder: `/${routTitle.Folder}`,
  Edit: `/${routTitle.Edit}`,
  resetPassword: `/${routTitle.resetPassword}`,
};

export const navbarList = [
  {
    icon: Search,
    desc: routTitle.Search,
    secondDesc: '',
    routeNames: routeNames.Search,
    badge: 0,
    subList: [],
  },
  {
    icon: DashboardOutlined,
    desc: 'Dashboard',
    secondDesc: 'Help me',
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
  {
    icon: Forum,
    desc: 'Forum',
    secondDesc: 'Message from andi',
    badge: 4,
    subList: [
      {
        desc: 'chat',
        badge: 4,
      },
      {
        desc: 'reminder',
        badge: 0,
      },
    ],
  },
  {
    icon: Analytics,
    desc: 'Analytics',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  {
    icon: FolderOpen,
    desc: 'Folder',
    secondDesc: '',
    badge: 0,
    subList: [
      {
        icon: DashboardOutlined,
        desc: 'Dashboard',
        secondDesc: '',
        badge: 0,
      },
    ],
  },
  {
    icon: BorderColor,
    desc: 'Edit',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
];

export default navbarList;
