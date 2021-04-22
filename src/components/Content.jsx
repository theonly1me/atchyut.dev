import {
  Paper,
  Box,
  Avatar,
  Typography,
  IconButton,
  Container,
  Link,
} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import useStyles from '../utils/styles';

const Content = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.contentContainer}>
      <Box className={classes.avatarContainer}>
        <Avatar
          alt="Atchyut Preetham Pulavarthi"
          src="/assets/atchyut.jpg"
          style={{ width: '200px', height: '200px' }}
        />
      </Box>
      <Box className={classes.contentTextHead}>
        <Typography variant="h6" paragraph>
          Hello there! 👋
        </Typography>
      </Box>
      <Box className={classes.contentTextBody}>
        <Typography variant="subtitle2" paragraph>
          {' '}
          Welcome to atchyut.dev ✨
        </Typography>
      </Box>
      <Box className={classes.contentTextCodeSnippet}>
        <Typography variant="body1" paragraph>
          <pre>
            {
              <>
                <code className="language-javascript">
                  {//prettier-ignore
            }
                  <span className={classes.colorTextPurple}>const</span>{' '}
                  <var>
                    <span className={classes.colorText}>whatDefinesMe</span>
                  </var>{' '}
                  = [
                  <span className={classes.colorTextString}>
                    'Developer 💻'
                  </span>
                  , <span className={classes.colorTextString}>'Gamer 🎮'</span>,{' '}
                  <span className={classes.colorTextString}>'Geek 🤓'</span>,{' '}
                  <span className={classes.colorTextString}>
                    'Family Man 👪'
                  </span>
                  ,{' '}
                </code>
                <br />
                <code className="language-javascript">
                  <span className={classes.colorTextString}>
                    'Cyborg Ninja 🦾'
                  </span>
                  ,
                  <span className={classes.colorTextString}>
                    'Fitness Boi 🚵‍♂️'
                  </span>
                  ,
                  <span className={classes.colorTextString}>
                    'Traveller 🗺️'
                  </span>
                  , ...
                  <span className={classes.colorText}>
                    <var>lotsOfOtherThings</var>
                  </span>
                  ];
                  {//prettier-ignore
            }
                  <br/>
                  <span className={classes.colorTextPurple}>const</span>{' '}
                  <var>
                    <span className={classes.colorText}>atchyut</span>
                  </var>{' '}
                  ={' '}
                  <var>
                    <span className={classes.colorText}>whatDefinesMe</span>
                  </var>
                  .<span className={classes.colorTextOrange}>reduce</span>((me,
                  trait) => me + trait);
                </code>
              </>
            }
          </pre>
        </Typography>
      </Box>
      <Box>
        <Box maxWidth="100%">
          <Typography align="center">
            <IconButton
              style={{ color: 'e4405f' }}
              component={Link}
              href="https://www.instagram.com/pulavarthi.preetham/"
              target="_blank"
            >
              <InstagramIcon fontSize="large" style={{ color: 'e4405f' }} />
            </IconButton>
            <IconButton
              style={{ color: 'inherit' }}
              component={Link}
              href="https://github.com/theonly1me"
              target="_blank"
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton
              style={{ color: '55acee' }}
              component={Link}
              href="https://www.twitter.com/AtchyutPreetham"
              target="_blank"
            >
              <TwitterIcon fontSize="large" style={{ color: '#55acee' }} />
            </IconButton>
            <IconButton
              style={{ color: '#0077B5' }}
              component={Link}
              href="https://www.linkedin.com/in/atchyutpulavarthi/"
              target="_blank"
            >
              <LinkedInIcon fontSize="large" style={{ color: '#0077B5' }} />
            </IconButton>
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default Content;
