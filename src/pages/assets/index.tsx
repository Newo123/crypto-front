import {
	Alert,
	AlertColor,
	Avatar,
	Button,
	Grid,
	Snackbar,
	Typography,
} from '@mui/material';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ISingleAsset } from '../../common/types/assets';
import FlexBetween from '../../components/flex-between';
import FlexCenter from '../../components/flex-center';
import { createWatchListRecord } from '../../store/thunks/assets';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { useStyles } from './styles';

const AssetsPage: FC = (): JSX.Element => {
	const [open, setOpen] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);
	const [severity, setSeverity] = useState<AlertColor>('success');
	const navigate = useNavigate();
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const assetsArray: ISingleAsset[] = useAppSelector(
		state => state.assets.assets,
	);
	const classes = useStyles();
	const asset = assetsArray.find(a => a.name === (id as string));

	const handleCreateRecord = () => {
		try {
			if (asset) {
				const data = {
					name: asset.name,
					assetId: asset.id,
				};
				dispatch(createWatchListRecord(data));
				setError(false);
				setSeverity('success');
				setOpen(true);
				setTimeout(() => {
					setOpen(false);
				}, 3000);
			}
		} catch (error) {
			setError(true);
			setSeverity('error');
			setOpen(true);
			setTimeout(() => {
				setOpen(false);
			}, 3000);
		}
	};

	return (
		<>
			{asset && (
				<Grid container className={classes.root}>
					<Grid item xs={12} className={classes.assetName}>
						<Typography variant='h1'>{asset.name}</Typography>
					</Grid>
					<FlexCenter item sm={6} xs={12}>
						<Grid className={classes.cardItem}>
							<FlexBetween>
								<Avatar src={asset.image} className={classes.assetIcon} />
								<Typography variant='h2' className={classes.assetSymbol}>
									{asset.symbol.toUpperCase()}
								</Typography>
							</FlexBetween>
						</Grid>
					</FlexCenter>
					<FlexCenter item sm={6} xs={12}>
						<Grid className={classes.cardItem}>
							<FlexBetween>
								<Typography variant='h2' className={classes.cardTitle}>
									Цена:{' '}
								</Typography>
								<Typography variant='h2'>$ {asset.current_price}</Typography>
							</FlexBetween>
						</Grid>
					</FlexCenter>
					<FlexCenter sm={6} xs={12}>
						<Grid container className={classes.cardItem}>
							<Typography variant='h2' className={classes.cardTitle}>
								Изменение цены:
							</Typography>
							<Typography
								variant='h2'
								className={
									asset.price_change_percentage_24h >= 0
										? `${classes.trendUp}`
										: `${classes.trendDown}`
								}
							>
								$ {asset.price_change_24h.toFixed(4)}
							</Typography>
						</Grid>
					</FlexCenter>
					<FlexCenter sm={6} xs={12}>
						<Grid className={classes.cardItem}>
							<Typography variant='h2' className={classes.cardTitle}>
								Изменение цены в процентах (%):
							</Typography>
							<Typography
								variant='h2'
								className={
									asset.price_change_percentage_24h >= 0
										? `${classes.trendUp}`
										: `${classes.trendDown}`
								}
							>
								{asset.price_change_percentage_24h.toFixed(2)}
							</Typography>
						</Grid>
					</FlexCenter>
					<FlexCenter className={classes.cardButtonBlock}>
						<Button
							color='success'
							variant='outlined'
							onClick={() => navigate(-1)}
						>
							Назад
						</Button>
						<Button
							color='success'
							variant='outlined'
							onClick={handleCreateRecord}
						>
							Добавить в избранное
						</Button>
					</FlexCenter>
					<Snackbar open={open} autoHideDuration={6000}>
						<Alert severity={severity} sx={{ width: '100%' }}>
							{!error ? 'Asset added to favorites' : 'Something went wrong'}
						</Alert>
					</Snackbar>
				</Grid>
			)}
		</>
	);
};

export default AssetsPage;
