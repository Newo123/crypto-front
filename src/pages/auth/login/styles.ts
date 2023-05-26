import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  incitingText: {
    color: '#1900d5',
    cursor: 'pointer',
    marginLeft: '10px',
    transition: 'all 0.3s linear',
    '&:hover': {
      opacity: '.5',
    },
  },
});
