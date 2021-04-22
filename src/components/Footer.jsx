import { Typography } from '@material-ui/core';
import useStyles from '../utils/styles';

function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <span className={classes.colorText}>
        Atchyut Preetham Pulavarthi
      </span>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Copyright />
    </footer>
  );
}
