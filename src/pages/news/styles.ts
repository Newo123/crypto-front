import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';

export const useStyles = makeStyles((theme: Theme) => {
	const colors = tokens(theme.palette.mode);

	return {
		root: {
			padding: 32,
			'& a': {
				textDecoration: 'none',
				color: `${
					theme.palette.mode === 'light'
						? colors.black.DEFAULT
						: colors.white.DEFAULT
				}`,
			},
		},
		image: {
			marginRight: '10px',
			'& img': {
				objectFit: 'cover',
				width: '100%',
			},
		},
		blockTitle: {
			textAlign: 'center',
			marginBottom: 32,
		},
		newsTitle: {
			marginBottom: 32,
		},
		readMore: {
			textAlign: 'center',
		},
		newsBlock: {
			backgroundColor: `${
				theme.palette.mode === 'light'
					? colors.primary.DEFAULT
					: colors.primary[600]
			}`,
			padding: '20px 16px !important',
			marginBottom: 32,
			border: `1px solid ${colors.borderColor}`,
			borderRadius: 12,
			'& MuiPaper-root': {
				backgroundColor: 'transparent !important',
				boxShadow: 'none !important',
				backgroundImage: 'none !important',
			},
		},
	};
});
