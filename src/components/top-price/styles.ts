import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);

  return {
    topPriceRoot: {
      background: 'none !important',
      backgroundColor: 'transparent !important',
      boxShadow: 'none !important',
      backgroundImage: 'none !important',
    },
    priceUp: {
      color: '#A9FFA7 !important',
    },
    priceDown: {
      color: '#FFA7A7 !important',
    },
  };
});
