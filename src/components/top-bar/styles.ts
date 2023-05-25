import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);

  return {
    root: {
      position: 'static',
      background: `${colors.primary.DEFAULT} !important`,
      borderBottom: `1px solid ${colors.borderColor}`,
      boxShadow: 'none !important',
      width: '100%',
    },
    toolbar: {
      justifyContent: 'space-between',
      padding: '25px 45px',
    },
    menuIcon: {
      cursor: 'pointer',
      marginRight: '10px',
    },
    iconBlock: {
      paddingRight: '35px !important',
      paddingTop: '5px !important',
      borderRight: `1px solid ${colors.borderColor}`,
    },
    themeIcon: {
      marginRight: '20px !important',
    },
    searchBlock: {
      display: 'flex',
      borderRadius: '8px !important',
      marginLeft: '28px !important',
      backgroundColor: `${colors.primary[600]}`,
      maxHeight: '45px',
    },
    searchIcon: {
      '&:hover': {
        backgroundColor: 'transparent !important',
      },
    },
    searchInput: {
      padding: '8px 12px !important',
    },
  };
});
