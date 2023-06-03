import { Box, Grid, Link, Typography } from '@mui/material';
import { FC, useEffect } from 'react';
import { getNews } from '../../store/thunks/news';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { useStyles } from './styles';

const NewsPage: FC = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const { news } = useAppSelector(state => state.news);
	const classes = useStyles();
	useEffect(() => {
		dispatch(getNews());
	}, []);

	console.log(news);

	const renderNewsBlock = news.map((element: any) => (
		<Grid container className={classes.newsBlock}>
			<Grid item xs={12} md={3} className={classes.image}>
				<img src={element.imageurl} alt={element.categories} />
			</Grid>
			<Grid item xs={12} md={9}>
				<Box className={classes.newsTitle}>
					<Typography variant='h3'>{element.title}</Typography>
				</Box>
				<Box>
					<Typography variant='body1'>{element.body}</Typography>
				</Box>
			</Grid>
			<Grid item xs={12} md={12} className={classes.readMore}>
				<Typography variant='h4'>
					<Link href={element.url}>Read more</Link>
				</Typography>
			</Grid>
		</Grid>
	));

	return (
		<Grid className={classes.root}>
			<Grid className={classes.blockTitle}>
				<Typography variant='h2'>Новости</Typography>
			</Grid>
			<Grid>{renderNewsBlock}</Grid>
		</Grid>
	);
};

export default NewsPage;
