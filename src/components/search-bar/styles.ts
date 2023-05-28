import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);

  return {
    searchBlock: {
      display: 'flex',
      borderRadius: '8px !important',
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
