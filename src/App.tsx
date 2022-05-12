import { Global } from '@emotion/react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  Stack,
} from '@mui/material';
import HelloWorld from './components/HelloWorld';
import globalStyle from './styles/global';
import { Routes, Route, Link } from 'react-router-dom';
import SideNavbar from './components/SideNavbar';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

const App = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Global styles={globalStyle} />

      <SideNavbar />
      <Box
        component="main"
        sx={{
          backgroundColor: 'lightblue',
          padding: '8px',
          width: '100%',
          height: '100vh',
          margin: '6px 14px',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="home" element={<HelloWorld text="world" />} />
          <Route path="signup" element={<SignupPage />} />
        </Routes>
      </Box>
    </Box>
  );
};
// App.js
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <iframe
          src="https://econoc.grafana.net/d-solo/I-tFDpY7k/3-data-explorer?orgId=1&from=1652189972912&to=1652362772912&panelId=2&allow_embedding=true"
          width="450"
          height="200"
        ></iframe>
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
}

function About() {
  return (
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
}
export default App;
