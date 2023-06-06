import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';

export const useStyles = makeStyles((theme: Theme) => {
	const colors = tokens(theme.palette.mode);
	return {
		brandTitle: {
			color: `${
				theme.palette.mode === 'dark'
					? colors.white.DEFAULT
					: colors.black.DEFAULT
			}`,
		},
		navList: {
			marginBottom: '55px !important',
		},
		navBlock: {
			borderBottom: `1px solid ${colors.borderColor}`,
			width: '100%',
		},
		brand: {
			display: 'flex',
			alignItems: 'center',
			gap: '10px',
			padding: '20px 15px',
			cursor: 'pointer',
		},
		navItem: {
			'&:hover': {
				backgroundColor: '#1900D5 !important',
				color: '#ffffff',
				borderRadius: '4px',
				'& .MuiSvgIcon-root': {
					color: `${colors.white.DEFAULT} !important`,
				},
			},
		},
		icons: {
			color: colors.secondary.DEFAULT,
		},

		active: {
			backgroundColor: '#1900D5 !important',
			color: '#fff !important',
			borderRadius: '4px !important',

			'& svg': {
				fill: '#fff',
			},
		},
	};
});
