import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);
  return {
    iconBlock: {
      paddingRight: '35px !important',
      paddingTop: '5px !important',
      // borderRight: `1px solid ${colors.borderColor}`,
    },
    themeIcon: {
      marginRight: '20px !important',
    },
  };
});
