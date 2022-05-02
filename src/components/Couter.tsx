import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { amountAdded } from '../features/counter/counter-slice';
import { useFetchBreedsQuery } from '../features/dogs/dogs.api.slice';

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(amountAdded(3));
  };
  return (
    <Box>
      <Button onClick={handleClick} variant="contained">
        count is: {count}
      </Button>
    </Box>
  );
};

export default Counter;
