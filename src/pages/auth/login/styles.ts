import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../../../theme';

export const useStyles = makeStyles((theme: Theme) => {
	const colors = tokens(theme.palette.mode);

	return {
		root: {
			'& .MuiOutlinedInput-root': {
				'&.Mui-focused fieldset': {
					borderColor: colors.blue,
				},
			},
		},
		incitingText: {
			color: '#1900d5',
			cursor: 'pointer',
			marginLeft: '10px',
			transition: 'all 0.3s linear',
			'&:hover': {
				opacity: '.5',
			},
		},
	};
});
