import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useFetchBreedsQuery } from '../features/dogs/dogs.api.slice';

export default function DogsSelector() {
  const [numDogs, setNumDogs] = useState(3);
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);
  return (
    <>
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
    </>
  );
}
