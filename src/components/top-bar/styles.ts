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
  };
});
