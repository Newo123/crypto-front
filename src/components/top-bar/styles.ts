import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);

  return {
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '32px 24px',
      backgroundColor: colors.primary.DEFAULT,
      maxHeight: '95px',
      borderBottom: `1px solid ${colors.borderColor}`,
    },
    iconBlock: {
      paddingRight: '35px',
      paddingTop: '10px',
      borderRight: `1px solid ${colors.borderColor}`,
    },
    themeIcon: {
      marginRight: '45px',
    },
    searchBlock: {
      display: 'flex',
      borderRadius: '8px',
      marginLeft: '28px',
      backgroundColor: `${colors.primary[600]}`,
    },
    searchIcon: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    searchInput: {
      padding: '18px 12px',
    },
  };

  // return {
  //   root: {
  //     display: 'flex !important',
  //     justifyContent: 'space-between !important',
  //     alignItems: 'center !important',
  //     padding: '32px 24px !important',
  //     backgroundColor: colors.primary.DEFAULT + '!important',
  //     maxHeight: '95px !important',
  //     borderBottom: `1px solid ${colors.borderColor} !important`,
  //   },
  //   iconBlock: {
  //     paddingRight: '35px !important',
  //     paddingTop: '5px !important',
  //     borderRight: `1px solid ${colors.borderColor} !important`,
  //   },
  //   themeIcon: {
  //     marginRight: '20px !important',
  //   },
  //   searchBlock: {
  //     display: 'flex',
  //     borderRadius: '8px !important',
  //     marginLeft: '28px !important',
  //     backgroundColor: `${colors.primary[600]} !important`,
  //   },
  //   searchIcon: {
  //     '&:hover': {
  //       backgroundColor: 'transparent !important',
  //     },
  //   },
  //   searchInput: {
  //     padding: '8px 12px !important',
  //   },
  // };
});
