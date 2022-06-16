import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = '300';
const TopNavbar = () => (
  <AppBar
    position="fixed"
    sx={{
      left: '270px',
      top: 16,
      borderRadius: 4,
      backgroundColor: '#44b700',
      color: '#44b700',
      width: { sm: `calc(100% - ${drawerWidth}px)` },
    }}
    elevation={1}
    color="default"
  >
    <Toolbar
      sx={{
        padding: '8px',
      }}
      data-test-id="default-header"
    />
  </AppBar>
);

export default TopNavbar;
