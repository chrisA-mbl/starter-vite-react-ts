import { Global } from '@emotion/react';
import { Box, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Navbar from './components/SideNavbar';
import globalStyle from './styles/global';
import TopNavbar from './components/TopNav';

// eslint-disable-next-line import/no-unresolved
import '@aws-amplify/ui-react/styles.css';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const Home = () => (
  <main>
    <Box sx={{ height: '100vh', width: '80vw', marginTop: 2 }}>
      <iframe
        title="FirstFrame"
        src="https://econoc.grafana.net/d/eswRhGB7z/1-device-health-dashboard?orgId=1&allow_embedding=true&kiosk=tv"
        height="90%"
        width="100%"
        style={{ borderRadius: 24 }}
      />
      <nav>
        <Stack direction="row" spacing={1}>
          <Link to="/login">Login</Link>
          <Link to="/home">Home</Link>
          <Link to="/signup">signup</Link>
        </Stack>
      </nav>
    </Box>

    <Box sx={{ m: 1 }} />
  </main>
);

const App = ({ signOut, user }) => (
  <Box sx={{ display: 'flex' }}>
    <Global styles={globalStyle} />
    <Navbar signOut={signOut} />

    <Box
      sx={{
        marginTop: 9,
        px: 4,
      }}
    >
      <TopNavbar />
      <Home />
    </Box>
  </Box>
);
export default withAuthenticator(App);
