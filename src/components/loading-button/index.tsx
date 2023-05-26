import LoadingButton from '@mui/lab/LoadingButton';
import { styled } from '@mui/material';

const AppLoadingButton = styled(LoadingButton)({
  borderRadius: 4,
  backgroundColor: '#1900D5 !important',
  boxShadow: '0px 3px 10px 2px #332a76 !important',
  padding: '10px 20px !important',
  maxWidth: 300,
  width: '70%',
  marginTop: '1rem',
  marginBottom: '1rem',
  '&:hover': {
    // backgroundColor: 'red !important',
  },
});

export default AppLoadingButton;
