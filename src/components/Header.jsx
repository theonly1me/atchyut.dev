//Material UI
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Divider,
  Slide,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

//Icons

import SunIcon from '@material-ui/icons/WbSunny';
import MoonIcon from '@material-ui/icons/NightsStay';

import { darkModeActive, toggleDarkMode } from '../state/slices/appSlice';

import useStyles from '../utils/styles';

const Header = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(darkModeActive);
  const classes = useStyles();

  const themeIcon = () => {
    return darkMode ? (
      <SunIcon style={{ color: '#fdcb6e' }} fontSize="large" />
    ) : (
      <MoonIcon style={{ color: '#ffeaa7' }} fontSize="large" />
    );
  };

  return (
    <>
      <Slide
        direction="down"
        in={true}
        appear={true}
        mountOnEnter
        unmountOnExit
        timeout={1000}
      >
        <AppBar color="primary" className={classes.header}>
          <Toolbar variant="dense">
            <Typography className={classes.headerTitle}>atchyut.dev</Typography>
            <Divider
              orientation="vertical"
              flexItem
              style={{ backgroundColor: '#636e72' }}
            />

            <IconButton
              onClick={() => dispatch(toggleDarkMode(!darkMode))}
              className={classes.headerDarkModeButton}
              edge="end"
            >
              {themeIcon()}
            </IconButton>
          </Toolbar>
        </AppBar>
      </Slide>
    </>
  );
};

export default Header;
