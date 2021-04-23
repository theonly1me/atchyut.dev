import {
  Paper,
  Box,
  Avatar,
  Typography,
  IconButton,
  Link,
  Fade,
} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';

import useStyles from '../utils/styles';

const Content = () => {
  const classes = useStyles();
  return (
    <Paper elevation={5} className={classes.contentContainer}>
      {/* <Zoom timeout={1000} mountOnEnter unmountOnExit in={true}> */}
      <Box className={classes.avatarContainer}>
        <Avatar
          alt="Atchyut Preetham Pulavarthi"
          src="/assets/atchyut.jpg"
          style={{ width: '200px', height: '200px' }}
        />
      </Box>
      {/* </Zoom> */}
      <Fade in={true} timeout={2000} mountOnEnter unmountOnExit>
        <Box className={classes.contentTextHead}>
          <Typography
            variant="h6"
            paragraph
            style={{ fontWeight: 700, textAlign: 'center' }}
          >
            Hey there 👋
            <br />
            I'm Atchyut Preetham Pulavarthi
          </Typography>
        </Box>
      </Fade>
      <Fade in={true} timeout={2000} mountOnEnter unmountOnExit>
        <Box className={classes.contentTextBody}>
          <Typography variant="subtitle1" paragraph>
            I'm a developer, designer, gamer and a techie. You've stumbled upon
            my personal slice of the internet✨
          </Typography>
          <Typography variant="subtitle1" paragraph>
            All the awesome projects I work on are available on my{' '}
            <GitHubIcon /> GitHub.
          </Typography>
        </Box>
      </Fade>
      <Box className={classes.contentTextCodeSnippet}>
        <Typography
          variant="body2"
          paragraph
          gutterBottom
          style={{ textAlign: 'center' }}
        >
          {//prettier-ignore
            }
          <span className={classes.colorTextPurple}>const</span>{' '}
          <var>
            <span className={classes.colorText}>myHobbies</span>
          </var>{' '}
          = [<span className={classes.colorTextString}>'Coding 💻'</span>,{' '}
          <span className={classes.colorTextString}>'Gaming 🎮'</span>,{' '}
          <span className={classes.colorTextString}>'Geeking out 🤓'</span>,{' '}
          <span className={classes.colorTextString}>'Family time 👪'</span>,{' '}
          <br />
          <span className={classes.colorTextString}>'Fitness 🚵‍♂️'</span>,{' '}
          <span className={classes.colorTextString}>'Travelling 🗺️'</span>, ...
          <span className={classes.colorText}>
            <var>lotsOfOtherThings</var>
          </span>
          ];
          {//prettier-ignore
            }
          <br/>
          <br />
          <span className={classes.colorTextPurple}>const</span>{' '}
          <var>
            <span className={classes.colorText}>🙋‍♂️</span>
          </var>{' '}
          ={' '}
          <var>
            <span className={classes.colorText}>myHobbies</span>
          </var>
          .<span className={classes.colorTextOrange}>reduce</span>((me, hobby)
          => me + hobby, ' ');
        </Typography>
      </Box>
      <Box>
        <Box maxWidth="100%">
          <Typography variant="body1" align="center">
            Click here to slide into my 📫
            <br />
            &darr;
            <br />
            <IconButton
              style={{ color: 'inherit' }}
              component={Link}
              href="mailto:pulavarthi.preetham@gmail.com"
              target="_blank"
            >
              <MailIcon fontSize="large" />
            </IconButton>
          </Typography>
          <Typography variant="body1" align="center">
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
