import { Global } from '@emotion/react';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { useFetchBreedsQuery } from './features/dogs/dogs.api.slice';
import HelloWorld from './components/HelloWorld';
import { amountAdded } from './features/counter/counter-slice';

import globalStyle from './styles/global';

const App = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [numDogs, setNumDogs] = useState(10);
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);
  const handleClick = () => {
    dispatch(amountAdded(3));
  };
  return (
    <>
      <Global styles={globalStyle} />
      <Button onClick={handleClick} variant="contained">
        count is: {count}
      </Button>
      <div>
        <p>Dogs to Fetch:</p>
        <select
          value={numDogs}
          onChange={(e) => setNumDogs(Number(e.target.value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
      <div>
        <p>Number of dogs fetched: {data.length}</p>
        {isFetching ? (
          <div>Wait your Turn!</div>
        ) : (
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
                    <img src={breed.image.url} alt={breed.name} height={200} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="App">
        <HelloWorld text="world" />
      </div>
    </>
  );
};

export default App;
