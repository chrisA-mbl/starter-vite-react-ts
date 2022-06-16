import { Global } from '@emotion/react';
import { Box, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import SideNavbar from './components/SideNavbar';
import globalStyle from './styles/global';

import '@aws-amplify/ui-react/styles.css';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const App = ({ signOut, user }) => (
  <Box sx={{ display: 'flex' }}>
    <Global styles={globalStyle} />

    <SideNavbar signOut={signOut} />
    <Box sx={{ display: 'flex' }} />
  </Box>
);

const Home = () => (
  <>
    <main>
      <Box sx={{ height: '90vh', width: '100vw' }}>
        <iframe
          title="FirstFrame"
          src="https://econoc.grafana.net/d-solo/I-tFDpY7k/3-data-explorer?orgId=1&from=1652189972912&to=1652362772912&panelId=2&allow_embedding=true"
          height="90%"
          width="100%"
        />
      </Box>

      <Box sx={{ m: 1 }} />
    </main>
    <nav>
      <Stack direction="row" spacing={1}>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/home">Home</Link>
        <Link to="/signup">signup</Link>
      </Stack>
    </nav>
  </>
);

const About = () => (
  <>
    <main>
      <h2>Who are we?</h2>
      <p>That feels like an existential question, don't you think?</p>
    </main>
    <nav>
      <Link to="/">Home</Link>
    </nav>
  </>
);
export default withAuthenticator(App);
