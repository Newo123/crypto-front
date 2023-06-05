import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';

export const useStyles = makeStyles((theme: Theme) => {
	const colors = tokens(theme.palette.mode);

	return {
		root: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			width: '100vw',
			height: '100vh',
			padding: '20px',
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
		form: {
			flex: 1,
		},
		incitingText: {
			cursor: 'pointer',
			marginLeft: '10px',
			color: '#1900D5',
		},
	};
});
