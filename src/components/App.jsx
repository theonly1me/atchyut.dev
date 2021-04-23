import { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
  createMuiTheme,
  useMediaQuery,
  ThemeProvider,
  Paper,
} from '@material-ui/core';

import { toggleDarkMode, darkModeActive } from '../state/slices/appSlice';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import useStyles from '../utils/styles';

const App = () => {
  const dispatch = useDispatch();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  useEffect(() => {
    dispatch(toggleDarkMode(prefersDarkMode));
  }, [prefersDarkMode]);

  const darkMode = useSelector(darkModeActive);

  const classes = useStyles();

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: {
            light: '#52796f',
            main: '#2f3e46',
            dark: '#212c32',
          },
          secondary: {
            light: '#ec5766',
            main: '#da344d',
            dark: '#c42348',
          },
          type: darkMode ? 'dark' : 'light',
          background: {
            paper: `${darkMode ? '#1e272e' : '#fff'}`,
          },
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} className={classes.appContainerPaper}>
        <Header />
        <Container className={classes.appBodyContainer}>
          <Content />
        </Container>
        <Footer />
      </Paper>
    </ThemeProvider>
  );
};

export default App;
