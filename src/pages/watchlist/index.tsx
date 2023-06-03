import { Button, Grid, Typography } from '@mui/material';
import { FC, useEffect, useRef, useState } from 'react';
import AssetsTableComponent from '../../components/assets-table';
import { getTopPriceData } from '../../store/thunks/assets';
import { getWatchListElements } from '../../store/thunks/watchlist';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { useStyles } from './styles';

const WatchListPage: FC = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const { watchList } = useAppSelector(state => state.watchList);
	const { assets } = useAppSelector(state => state.assets);
	const classes = useStyles();
	const heightRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState<number>(0);
	const [more, setMore] = useState<number>(6);
	useEffect(() => {
		dispatch(getTopPriceData());
		dispatch(getWatchListElements());
	}, [dispatch]);

	const filteredArray = assets.filter((element: any) => {
		return watchList.some((otherElement: any) => {
			return otherElement.assetId === element.id;
		});
	});

	useEffect(() => {
		if (!heightRef.current) return;
		setHeight(heightRef.current.offsetHeight);
	}, [heightRef]);

	return (
		<Grid className={classes.root}>
			<Grid className={classes.watchListHeading}>
				<Typography variant='h2' className={classes.heading}>
					Избранное
				</Typography>
			</Grid>
			<Grid className={classes.assetsTableBlock} ref={heightRef}>
				<AssetsTableComponent assets={filteredArray} />
				{height > 250 ? (
					<Button
						sx={{ marginTop: '20px' }}
						color='secondary'
						className={classes.moreButton}
						onClick={() => setMore(prev => prev + 6)}
					>
						Показать еще
					</Button>
				) : null}
			</Grid>
		</Grid>
	);
};

export default WatchListPage;
