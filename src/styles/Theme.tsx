import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const newTheme = createTheme();
const theme = responsiveFontSizes(newTheme);
export default theme;
