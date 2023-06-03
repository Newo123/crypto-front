import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';

export const useStyles = makeStyles((theme: Theme) => {
	const colors = tokens(theme.palette.mode);

	return {
		root: {
			padding: 5,
			alignItems: 'center'
		},
		assetName: {
			display: 'flex',
			justifyContent: 'center',
			margin: '50px 0 !important'
		},
		cardItem: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: `${
				theme.palette.mode === 'light'
					? colors.primary.DEFAULT
					: colors.primary[600]
			}`,
			padding: '20px 16px !important',
			width: '100% !important',
			maxWidth: 500,
			minHeight: 150,
			marginBottom: '25px !important',
			border: `1px solid ${colors.borderColor}`,
			borderRadius: 12
		},
		assetIcon: {
			marginRight: '5px !important'
		},
		assetSymbol: {
			fontWeight: '600 !important'
		},
		cardTitle: {
			fontWeight: '600 !important',
			marginRight: '5px !important'
		},
		cardButtonBlock: {
			gap: '30px',
			width: '100%',
			marginTop: 25
		},
		trendUp: {
			color: '#A9FFA7'
		},
		trendDown: {
			color: '#FFA7A7'
		}
	};
});
