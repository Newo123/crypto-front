import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';

export const useStyles = makeStyles((theme: Theme) => {
	const colors = tokens(theme.palette.mode);

	return {
		root: {},
		tabHeading: {
			width: '100%',
			textAlign: 'center',
			marginBottom: '32px !important',
		},
		alertMessage: {
			width: '100%',
			textAlign: 'center',
			marginBottom: '32px !important',
		},
		checkbox: {
			color: `${colors.blue} !important`,
			'&.Mui-checked': {
				color: `${colors.blue} !important`,
			},
		},
		checkboxBlock: {
			display: 'flex',
			justifyContent: 'center',
			width: '100%',
		},
		buttonBlock: {
			display: 'flex',
			justifyContent: 'center',
			width: '100%',
		},
	};
});
