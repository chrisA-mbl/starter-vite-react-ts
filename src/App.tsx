import { Global } from '@emotion/react';
import { FormControl, InputLabel, MenuItem, Select, Box } from '@mui/material';
import { useState } from 'react';
import { useFetchBreedsQuery } from './features/dogs/dogs.api.slice';
import HelloWorld from './components/HelloWorld';

import globalStyle from './styles/global';
import { Routes, Route, Link } from 'react-router-dom';

const App = () => {
  const [numDogs, setNumDogs] = useState(3);
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

  return (
    <Box>
      <Global styles={globalStyle} />
      <Box sx={{ mt: 2 }}>
        <FormControl sx={{ width: 500 }}>
          <InputLabel id="demo-simple-select-label">Dogs to Fetch:</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={numDogs}
            label="Age"
            onChange={(e) => setNumDogs(Number(e.target.value))}
          >
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <div>
        <p>Number of dogs fetched: {data.length}</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Breed</th>
            </tr>
          </thead>
          <tbody>
            {data.map((breed) => (
              <tr key={breed.id}>
                <td>{breed.name}</td>
                <td>
                  <img src={breed.image.url} alt={breed.name} height={100} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="App">
        <h1>Welcome to React Router!</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>

        <HelloWorld text="world" />
      </div>
    </Box>
  );
};

// App.js
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
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
