import { Box, Button, Grid } from '@mui/material';
import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import TrendDown from '../../assets/images/chart/trend-down.svg';
import TrendUp from '../../assets/images/chart/trend-up.svg';
import { IChartData, ISingleAsset } from '../../common/types/assets';
import AreaChart from '../../components/charts/area-chart';
import LineChart from '../../components/charts/line-chart';
import TopPriceComponent from '../../components/top-price';
import { getFavoriteAssets, getTopPriceData } from '../../store/thunks/assets';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { useStyles } from './styles';

const HomePage: FC = (): JSX.Element => {
  const [more, setMore] = useState<number>(6);
  const favoriteAssets: IChartData[] = useAppSelector(
    (state) => state.assets.favoriteAssets,
  );
  const assetsArray: ISingleAsset[] = useAppSelector(
    (state) => state.assets.assets,
  );

  const dispatch = useAppDispatch();
  const fetchDataRef = useRef(false);
  const classes = useStyles();

  const favoriteAssetName: string[] = useMemo(
    () => ['bitcoin', 'ethereum'],
    [],
  );
  const filteredArray = useMemo(() => {
    return favoriteAssets.filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.name === value.name),
    );
  }, [favoriteAssets]);

  const filteredAssetArray = assetsArray
    .slice()
    .sort((a, b) => b.current_price - a.current_price);

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
    dispatch(getTopPriceData);
  }, [favoriteAssetName, fetchData, dispatch]);

  const renderFavoriteBlock = filteredArray.map((element: IChartData) => {
    // const currentCap = element.singleAsset.map(
    //   (element: any) => element.market_cap,
    // );

    let currentPrice = 0,
      changePrice = 0;
    element.singleAsset.forEach((element: ISingleAsset) => {
      currentPrice = element.current_price;
      changePrice = element.market_cap_change_percentage_24h;
    });

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
            <AreaChart data={element.price_chart_data} />
          </Grid>
        </Grid>
      </Grid>
    );
  });

  return (
    <Box className={classes.root}>
      <Grid container spacing={2} className={classes.areaChart}>
        {renderFavoriteBlock}
      </Grid>
      <Grid container className={classes.lineChartBlock}>
        <Grid item xs={12} sm={12} lg={12}>
          {filteredArray.length && <LineChart data={filteredArray} />}
        </Grid>
      </Grid>
      <Grid container justifyContent="center" className={classes.topPriceRoot}>
        <Grid item xs={12} sm={12} lg={12}>
          {filteredAssetArray && (
            <TopPriceComponent assets={filteredAssetArray.slice(0, more)} />
          )}
        </Grid>
        <Button
          color="secondary"
          className={classes.moreButton}
          onClick={() => setMore((prev) => prev + 6)}
        >
          Показать еще
        </Button>
      </Grid>
    </Box>
  );
};

export default HomePage;
