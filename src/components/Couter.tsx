import { Box, Button } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { amountAdded } from '../features/counter/counter-slice';

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(amountAdded(3));
  };
  const handleRemove = () => {};
  return (
    <Box>
      <Button onClick={handleClick} variant="contained">
        count is: {count}
      </Button>
      <Button onClick={handleRemove} variant="contained">
        count is: {count}
      </Button>
    </Box>
  );
};

export default Counter;
