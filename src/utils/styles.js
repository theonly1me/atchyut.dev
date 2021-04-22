import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme =>
  createStyles({
    appContainerPaper: {
      borderRadius: '0',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    appBodyContainer: {
      marginTop: '150px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
    },
    header: {
      marginTop: 10,
      padding: 5,
      borderTopRightRadius: '25px',
      borderTopLeftRadius: '25px',
      borderRadius: '100px',
      maxWidth: '98%',
      marginRight: '1%',
    },
    headerTitle: {
      fontFamily: 'Montserrat, sans-serif;',
      fontSize: 36,
      marginRight: 20,
      color: '#c44569',
      fontWeight: '300',
      flexGrow: 1,
    },
    headerDarkModeButton: {
      marginLeft: 50,
      marginRight: 50,
    },
    contentContainer: {
      minWidth: '50%',
      padding: 10,
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
    avatar: {
      width: 300,
      height: 300,
    },
    avatarContainer: {
      display: 'flex',
      justifyContent: 'center',
    },
    contentTextHead: {
      fontFamily: 'Montserrat, sans-serif;',
      fontWeight: '200',
      display: 'flex',
      justifyContent: 'center',
    },
    contentTextBody: {
      fontFamily: 'Montserrat, sans-serif;',
      fontWeight: '200',
      display: 'flex',
      justifyContent: 'center',
    },
    contentTextCodeSnippet: {
      fontFamily: 'Montserrat, sans-serif;',
      fontWeight: '400',
      display: 'flex',
      justifyContent: 'center',
    },
    colorText: {
      color: '#c42348',
    },
    colorTextString: {
      color: '#1dd1a1',
    },
    colorTextPurple: {
      color: '#D980FA',
    },
    colorTextOrange: {
      color: '#FFC312',
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6, 0),
      marginTop: 10,
    },
  })
);

export default useStyles;
