import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';

export const useStyles = makeStyles((theme: Theme) => {
	const colors = tokens(theme.palette.mode);

	return {
		root: {
			padding: '10px 20px !important',
		},
		watchListHeading: {
			textAlign: 'center',
		},
		heading: {
			margin: '25px 0 !important',
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
		assetsTableBlock: {
			display: 'grid',
			backgroundColor: `${
				theme.palette.mode === 'light'
					? colors.primary.DEFAULT
					: colors.primary[600]
			}`,
			padding: '20px 16px !important',
			marginBottom: 32,
			border: `1px solid ${colors.borderColor} !important`,
			borderRadius: 12,
			'& MuiPaper-root': {
				backgroundColor: 'transparent !important',
				boxShadow: 'none !important',
				backgroundImage: 'none !important',
			},
		},
	};
});
