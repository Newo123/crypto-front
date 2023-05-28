import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);

  return {
    root: {
      flexGrow: 1,
      padding: '32px',
    },
    areaChart: {
      marginBottom: '32px',
    },
    graph: {
      alignSelf: 'flex-end',
    },
    topCardItem: {
      backgroundColor: `${
        theme.palette.mode === 'light'
          ? colors.primary.DEFAULT
          : colors.primary[600]
      }`,
      padding: '20px 16px',
      minHeight: 185,
      border: `1px solid ${colors.borderColor}`,
      borderRadius: 12,
    },
    assetName: {
      fontSize: 25,
      fontWeight: 600,
      lineHeight: '30px !important',
      textTransform: 'capitalize',
    },
    itemDetails: {
      display: 'flex',
      height: '100% !important',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      paddingBottom: '35px !important',
    },
    cardPrice: {
      fontSize: 32,
      fontWeight: 700,
      lineHeight: '48px !important',
    },
    priceTrend: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      fontSize: '12px !important',
      fontWeight: 400,
      lineHeight: '21px !important',
      borderRadius: '4px',
      padding: '4px',
      width: 'max-content',
    },
    Up: {
      color: '#037400',
      backgroundColor: '#A9FFA7',
    },
    Down: {
      color: '#740000',
      backgroundColor: '#FFA7A7',
    },
    lineChartBlock: {
      backgroundColor: `${
        theme.palette.mode === 'light'
          ? colors.primary.DEFAULT
          : colors.primary[600]
      }`,
      marginBottom: 32,
      padding: '20px 16px',
      minHeight: 270,
      border: `1px solid ${colors.borderColor}`,
      borderRadius: 12,
    },
    topPriceRoot: {
      backgroundColor: `${
        theme.palette.mode === 'light'
          ? colors.primary.DEFAULT
          : colors.primary[600]
      }`,
      padding: '20px 16px',
      marginBottom: 32,
      minHeight: 270,
      border: `1px solid ${colors.borderColor}`,
      borderRadius: 12,
    },
    moreButton: {
      maxWidth: '300px !important',
      width: '100% !important',
      maxHeight: '50px !important',
      padding: '10px 0 !important',
      border: `1px solid ${colors.borderColor} !important`,
      color: `${
        theme.palette.mode === 'light'
          ? colors.black.DEFAULT
          : colors.white.DEFAULT
      } !important`,
      backgroundColor: `${
        theme.palette.mode === 'light' ? colors.white[100] : colors.black[700]
      } !important`,
      alignSelf: 'flex-end',
    },
  };
});
