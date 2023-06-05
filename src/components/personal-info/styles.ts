import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';

export const useStyles = makeStyles((theme: Theme) => {
	const colors = tokens(theme.palette.mode);

	return {
		root: {
			'& .MuiOutlinedInput-root': {
				'&.Mui-focused fieldset': {
					borderColor: colors.blue,
				},
			},
			'& label.Mui-focused': {
				color: `${
					theme.palette.mode === 'dark'
						? colors.white.DEFAULT
						: colors.black.DEFAULT
				}`,
			},
		},
		formWrapper: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			padding: '32px 0 !important',
		},
		inputField: {
			maxWidth: '400px',
			width: '100%',
			marginBottom: '15px !important',
		},
		buttonBlock: {
			display: 'flex',
			justifyContent: 'center',
			maxWidth: '300px',
			width: '100%',
			marginTop: 32,
		},
	};
});
