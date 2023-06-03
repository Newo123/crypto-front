import { Avatar, Button, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ISingleAsset } from '../../common/types/assets';
import FlexBetween from '../../components/flex-between';
import FlexCenter from '../../components/flex-center';
import { createWatchListRecord } from '../../store/thunks/assets';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { useStyles } from './styles';

const AssetsPage: FC = (): JSX.Element => {
	const navigate = useNavigate();
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const assetsArray: ISingleAsset[] = useAppSelector(
		state => state.assets.assets
	);
	const classes = useStyles();
	const asset = assetsArray.find(a => a.name === (id as string));

	const handleCreateRecord = () => {
		if (asset) {
			const data = {
				name: asset.name,
				assetId: asset.id
			};
			dispatch(createWatchListRecord(data));
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
				</Grid>
			)}
		</>
	);
};

export default AssetsPage;
