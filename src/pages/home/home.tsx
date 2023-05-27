import { Box, Grid } from '@mui/material';
import { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import TrendDown from '../../assets/images/chart/trend-down.svg';
import TrendUp from '../../assets/images/chart/trend-up.svg';
import AreaChart from '../../components/charts/area-chart';
import { getFavoriteAssets } from '../../store/thunks/assets';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { useStyles } from './styles';

const Home: FC = (): JSX.Element => {
  const favoriteAssets: any[] = useAppSelector(
    (state) => state.assets.favoriteAssets,
  );
  const dispatch = useAppDispatch();
  const fetchDataRef = useRef(false);
  const classes = useStyles();

  const favoriteAssetName: string[] = useMemo(
    () => ['bitcoin', 'ethereum'],
    [],
  );
  const filtredArray = favoriteAssets.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.name === value.name),
  );

  const fetchData = useCallback(
    (data: string[]) => {
      data.forEach((element: string) => {
        dispatch(getFavoriteAssets(element));
      });
    },
    [dispatch],
  );

  useEffect(() => {
    if (fetchDataRef.current) {
      return;
    }
    fetchDataRef.current = true;

    fetchData(favoriteAssetName);
  }, [favoriteAssetName, fetchData]);

  const renderFavoriteBlock = filtredArray.map((element: any) => {
    console.log('Element ', element);
    const currentPrice = element.singleAsset.map(
      (element: any) => element.current_price,
    );
    // const currentCap = element.singleAsset.map(
    //   (element: any) => element.market_cap,
    // );

    const changePrice = element.singleAsset.map(
      (element: any) => element.market_cap_change_percentage_24h,
    );

    return (
      <Grid item xs={12} sm={6} lg={6} key={element.name}>
        <Grid container className={classes.topCardItem}>
          <Grid item xs={12} sm={6} lg={6}>
            <h3 className={classes.assetName}>{element.name}</h3>
            <div className={classes.itemDetails}>
              <h3 className={classes.cardPrice}>${currentPrice}</h3>
              <p
                className={
                  changePrice > 0
                    ? `${classes.priceTrend} ${classes.Up}`
                    : `${classes.priceTrend} ${classes.Down}`
                }
              >
                {changePrice > 0 ? (
                  <img src={TrendUp} alt="up" />
                ) : (
                  <img src={TrendDown} alt="down" />
                )}
                <span>{Number(changePrice).toFixed(2)} %</span>
              </p>
            </div>
          </Grid>
          <Grid className={classes.graph} item xs={12} sm={6} lg={6}>
            <AreaChart data={element.data} />
          </Grid>
        </Grid>
      </Grid>
    );
  });

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        {renderFavoriteBlock}
      </Grid>
    </Box>
  );
};

export default Home;
